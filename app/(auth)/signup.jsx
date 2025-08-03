 
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const SignIn = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
    const [form,setForm] = useState({
      name: '',
      email: '',
      password: ''
    });
  const handleSignUp = () => {
    if(!form.name || !form.email || !form.password) return Alert.alert("Error",'Please fill in all fields');
  
    console.log('Form Data:', form);
  }
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

