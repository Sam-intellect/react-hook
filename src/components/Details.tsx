import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useIpAddress } from './useIpAddress';
import { BASE_URl } from '../api/config';

const Details: React.FC = (string) => {
  const [ipAddress, setIpAddress] = useState<string>('');

  useEffect(() => {
    const getIPAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org/?format=json');
        const ipAddress = response.data.ip;
        console.log(ipAddress);
        setIpAddress(ipAddress);
      } catch (error) {
        console.error(error);
      }
    };

    getIPAddress();
  }, []);
  const { data, loading, error } = useIpAddress(
    `${BASE_URl}/${ipAddress}/json`
  );

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <button onClick={console.log(ipAddress)}>Hello</button>
      </div>
    </>
  );
};

export default Details;
