import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: ()=> Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
                setLoading(true);
                setError(null);

                const result = await fetchFunction();
                // passed through props as a function

                setData(result);
        } catch(err) {
            //@ts-ignore
            setError(err instanceof Error ? err : new Error('An error occurred'));
        }  finally {
            setLoading(false);
        }
    }
    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
        //resetting so basically halting loading and clearing data and errors
    }
    useEffect(() => {
        //useEffect is used when you want to do something at the start of the component load like animations and effects in powerpoint
        if(autoFetch){
            fetchData();
        }
            //checking if autofetch is on as component loads
            //if autofetch is true, fetch data
    },[]);

    return {data, loading,error, refetch: fetchData, reset};
} 
export default useFetch  