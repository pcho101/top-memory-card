import { useState, useEffect } from "react";

const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      console.log('Sending api request')
      try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch.')
        }
        setFetchedData(data);
        setIsLoading(false);
      }
      catch(err) {
        console.log('Error!', err);
        setIsLoading(false);
      }
    }
    getData();
  }, dependencies)
  
  return [isLoading, fetchedData]
}

export default useHttp;
