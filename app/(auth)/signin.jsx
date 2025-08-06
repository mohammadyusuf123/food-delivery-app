 
/* eslint-disable react/no-unescaped-entities */
 
import * as Sentry from '@sentry/react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { signIn } from '../../libs/appwrite';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form,setForm] = useState({
    email: '',
    password: ''
  });
  const handleSignIn = async() => {
    const { email, password } = form;
    if(!email || !password) {
      Alert.alert("Error",'Please fill in all fields');
      return;
    }
      setIsSubmitting(true);
  //      try {
  //   // Check if already logged in
  //   const currentSession = await account.get();
  //   if (currentSession) {
  //       await account.deleteSession("current");
  //        <Redirect href="/" />;
  //     console.log("signed out:", currentSession.email);
     
  //   }
  // } catch (error) {
  //   // If error, likely not signed in — so we proceed to sign in
  // }
    try {
      //AppWrite sign-in logic here
      const response = await signIn({email,password});
      console.log(response);
      if(response) {
        console.log(response);
        Alert.alert('Sign in successful');
        router.push('/'); // Navigate to home page after successful sign-in
      }
    } catch (error) {
      Alert.alert('Error signing in', error.message);
      Sentry.captureException(error);
    }finally {  
    setIsSubmitting(false);
    }
  }
  return (
       <View className='gap-10 bg-white rounded-lg p-5 pt-5'>
      <CustomInput 
      label="Email" 
      placeholder='Enter your email'
      value={form.email}
      onChangeText={(text) => setForm({...form, email: text})}
      autoCapitalize="none"
      autoCorrect={false}
      />
      <CustomInput 
      label="Password" 
      placeholder='Enter your password' 
      secureTextEntry={true} 
      value={form.password}
      onChangeText={(text) => setForm({...form, password: text})}
      autoCapitalize="none"
      autoCorrect={false}
      />
      <CustomButton 
       title="Sign In" 
       style={{marginTop: 10}}
       onPress={handleSignIn}
       />
      <View className='flex flex-row justify-center  gap-2'>
        <Text className='text-gray-500 mt-1'>Don't have an account?</Text>
       
          <Link href="/signup"  className='text-primary base-bold '>Sign Up</Link>
        
       
        
      </View>
     
        </View>
      
  )
}

export default SignIn

const styles = StyleSheet.create({})