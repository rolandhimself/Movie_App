import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'


const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
  return (
   <Link href= {`/movies/${id}`} asChild>
    <TouchableOpacity className="w-[30%]">
        <Image
            source = {{
                uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`:
                `https://placehold.co/600x400/1a1a1a/ffffff.png`
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white" numberOfLines={1}>{title}</Text>

        <View className="flex-row items-center justify-start gap-x-1">
            <Image source ={icons.star} className="size-4"/>
            <Text className="text-xs text-white font-bold uppercase">{(vote_average/2).toFixed(2)}</Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className = "text-xs text-light-300 font-medium mt-1">{release_date?.split('-')[0]}</Text>
            {/*(?.)is used so if release_date is undefined it doesn't return an error
            split('-') means split it into an array splitting using the -
            [0] means return the first element of that array.*/}
        </View>
    </TouchableOpacity>
   </Link>
  )
}
{/*asChild means thing inside link is rather clickable*/}
export default MovieCard