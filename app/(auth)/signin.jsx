import { StyleSheet, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignIn = () => {
  return (
       <View className='gap-10 bg-white rounded-lg p-5 pt-5'>
      <CustomInput label="Email" placeholder='Enter your email'/>
      <CustomInput label="Password" placeholder='Enter your password' secureTextEntry={true} />
      <CustomButton title="Sign In" style={{marginTop: 20}} />
      
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})