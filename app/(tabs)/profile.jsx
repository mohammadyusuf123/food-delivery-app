import { Link } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Link href="sign-in">
        <Button title='Go to Sign In' />
      </Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})