import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = ({
  placeholder="Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry=false,
  keyboardType="default",   
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor="#8888"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`border-b-2 ${isFocused ? 'border-primary' : 'border-gray-300'} py-2 px-4`}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})