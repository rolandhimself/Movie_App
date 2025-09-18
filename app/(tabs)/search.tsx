import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { FlatList, Image, View } from 'react-native';

const search = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({query: ''}))

  return (
    <View className="flex-1 bg-primary">
      <Image source = {images.bg} className="absolute w-full z-0" resizeMode="cover"/>

      <FlatList 
      data={movies} 
      renderItem={({item})=> <MovieCard {...item}/>}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      columnWrapperStyle={
       { justifyContent: 'flex-start',
        gap: 16,
        marginVertical: 16,
        marginBottom: 10,}
      }
      className="px-5"
      />
    </View>
  );
}

export default search