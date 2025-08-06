 
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { createUser } from '../../libs/appwrite';

const SignIn = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
    const [form,setForm] = useState({
      name: '',
      email: '',
      password: ''
    });
  const handleSignUp = async() => {
    const{ name, email, password } = form;
    // Validate form fields
    if(!name || !email || !password) return Alert.alert("Error",'Please fill in all fields');
  setIsSubmitting(true);
  try {
    //AppWrite sign-in logic here
    const response = await createUser({email,password,name});
    console.log(response);
    if(response) {       
      console.log(response); 
      Alert.alert('Sign in successful');
      router.push('/signin'); // Navigate to sign-in page after successful sign-up
    }
  } catch (error) {
    Alert.alert('Error signing in', error.message);
  }finally {  
  setIsSubmitting(false);
  }
}
if(isSubmitting) return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, justifyContent: 'center'}} />;
  return (
<View className='gap-10 bg-white rounded-lg p-5 pt-2'>
      <CustomInput 
      label="Full Name" 
      placeholder='Enter your full name'
      value={form.name}
      onChangeText={(text) => setForm({...form, name: text})}
      autoCapitalize="none"
      autoCorrect={false}
      />
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
       title="Sign Up" 
       style={{marginTop: 10}}
       onPress={handleSignUp}
       />
      <View className='flex flex-row justify-center  gap-2'>
        <Text className='text-gray-500 mt-1'>Already have an account?</Text>
       
          <Link href="/signin"  className='text-primary base-bold '>Sign In</Link>
      </View>
     
        </View>
  )
}

export default SignIn

