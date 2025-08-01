import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CustomButton = ({
  title = "Click Me",
  onPress = () => {},
  disabled = false,
  style = {},
  textStyle = {},
  isLoading = false,
  leftIcon
}) => {
  return (
   <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className="custom-btn"
      style={[styles.button, style, disabled && styles.disabledButton]}
    >
      {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className="text-white base-bold" style={[styles.buttonText, textStyle]}>{title}</Text>
      )}    
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})