import { useState, useEffect } from 'react';

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await fetch(dataSource);
        const result = await fetchedData.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }

    fetchData();
  }, [dataSource]);

  return [loading, error, data];
}

export default useDataFetching;
