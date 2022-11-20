import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useToken = user => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email
      if (email) {
        const { data } = await axios.post(`http://localhost:5000/user/${email}`)
        localStorage.setItem('accessToken', data)
        setToken(data);
      }
    }
    getToken();

  }, [user])
  return [token]
}

export default useToken;