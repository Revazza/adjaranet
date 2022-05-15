import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setResponseData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed To Fetch Data");
      }
    };

    fetchData();
  }, [url]);

  return { responseData, isLoading, error };
}

export default useFetch;
