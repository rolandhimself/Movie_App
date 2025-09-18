import { icons } from '@/constants/icons';
import { Image, TextInput, View } from 'react-native';
//importing from react native

interface Props {
    placeholder: string;
    onPress?: () => void;
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({placeholder, onPress, value, onChangeText}:Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        //flex-row means everything inside the view will be in a row horizontally items-center means everything will be aligned in the center bg-dark-200 is the background color rounded-full is to make the corners rounded px-5 is padding on x axis py-4 is padding on y axis
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
        //size-5 is width and height resizeMode is to contain the image within the view tintColor is to change the color of the image
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#a8b5db"
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        //flex-1 is to take up all the available space ml-2 is margin on left text-white is to make the text color white
      ></TextInput>
    </View>
  )
}

export default SearchBar