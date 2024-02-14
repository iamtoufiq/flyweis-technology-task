import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

const useMultipleApi = (endpoints) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const urls = endpoints.map((endpoint) => `${baseUrl}${endpoint}`);
        const responses = await Promise.allSettled(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );

        setData(responses);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoints]);

  return { data, loading, error };
};

export default useMultipleApi;
