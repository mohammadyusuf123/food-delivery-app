/* eslint-disable react/no-unescaped-entities */
 
import { Link } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form,setForm] = useState({
    email: '',
    password: ''
  });
  const handleSignIn = () => {
    console.log('Form Data:', form);
    // isSubmitting(true);
    // if(!form.email || !form.password) {
    //   Alert.alert("Error",'Please fill in all fields');
    //   isSubmitting(false);
    //   return;
    // }
    // try {
    //   //AppWrite sign-in logic here
    //   // const response = await appwriteClient.account.createEmailSession(form.email, form.password);
    //   // if(response) {       
    //   //   console.log(response); 
    //   //   Alert.alert('Sign in successful');
    //   // }
    //   // For demonstration, we will just log the form data
    //   // Alert.alert("Success",'Sign in successful',);
    //   // Reset form after successful sign-in
    // } catch (error) {
    //   Alert.alert('Error signing in', error.message);
    // }finally {  
    // isSubmitting(false);
    // }
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