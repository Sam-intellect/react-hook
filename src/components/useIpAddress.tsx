import { useState, useEffect } from 'react';

interface IpData {
  version: string;
  city: string;
  region: string;
  country_name: string;
  country_capital: string;
  timezone: string;
  currency_name: string;
  country_population: number;
  asn: string;
  org: string;
}

export const useIpAddress = (url: string) => {
  const [data, setData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('failed to fetch IP address data');
        }
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
