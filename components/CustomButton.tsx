import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity} from 'react-native'

type CustomButtonTypes = {
    tittle: string,
    handlePress: any,
    containerStyles: string,
    textStyles: string,
    isLoading: boolean
}

const CustomButton = ({tittle, handlePress, containerStyles, textStyles, isLoading}:CustomButtonTypes) => {
  return (
    <TouchableOpacity 
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`} 
    onPress = {handlePress}
    activeOpacity={0.7}
    disabled = {isLoading}

    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{tittle}</Text>
    </TouchableOpacity>
  )
}
 
export default CustomButton