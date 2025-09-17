export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3', //base URL for TMDB API
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY, //API key stored in environment variable for security since .env file is in .gitignore
    headers: { //headers for API requests
        accept: 'application/json', //sets what type of response we want (JSON and not XML or HTML
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}` //authenticates API requests
    }
}

export const fetchMovies = async({query} : {query: string}) => {
    const endpoint = query //operator checks if query exists
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` //if query exists, search for movies matching the query
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; //if no query, fetch popular movies

    const response = await fetch(endpoint, {
        method: 'GET', //HTTP method to retrieve data
        headers: TMDB_CONFIG.headers, //headers retrieved from TMDB_CONFIG above
    });

    if (!response.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText) //if response fails, throw error
    }

    const data = await response.json(); //parse response as JSON
    return data.results; // Return the movies array from the API response
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';