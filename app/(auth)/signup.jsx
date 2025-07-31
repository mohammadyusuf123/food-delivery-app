import { StyleSheet, View } from 'react-native'
import CustomInput from '../../components/CustomInput'

const SignIn = () => {
  return (
 <View>
      <CustomInput label="Email" placeholder='Enter your email' />
      <CustomInput label="Password" placeholder='Enter your password' secureTextEntry />
 </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})