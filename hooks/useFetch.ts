import axios from "axios";
import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
}

interface ErrorProps {
  sucess: boolean;
  message: string;
}

interface DataProps { 
   id: string | number;
   title: string; 
   link: string; 
   tag: string[];
   userId: string | number;
}

function useFetch({ url }: UseFetchProps) {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorProps>({
    sucess: false,
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(url);

        if (response.status === 200) {
          setData(response.data.data);
          setLoading(false);
        }
        console.log("should run only once!..")
      } catch (error) {
        console.log(error);
        setError({
          sucess: false,
          message: "something went wrong please try again",
        })
      }
    }
    fetchData();
    
  }, [url]);

  return { data, loading, error };
}


export default useFetch; 