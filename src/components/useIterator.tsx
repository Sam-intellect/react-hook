import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  name: string;
  picture: string;
}

const useIterator = (url: string) => {
  const [user, setUser] = useState<User[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios(url);
      const { data } = response;
      const { results: userList } = data;

      const {
        name: { first, last },
        picture: { thumbnail },
      } = userList[0];

      console.log(first, last, thumbnail);
      setUser([...user, { name: `${first} ${last}`, picture: thumbnail }]);
    } catch (errr) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const next = () => {
    fetchData();
  };
  const previous = () => {};

  return { user, index, isLoading, error, next, previous };
};

export default useIterator;
