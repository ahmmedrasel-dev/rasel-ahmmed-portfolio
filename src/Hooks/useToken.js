import { useEffect } from "react";
import { useState } from "react";
import axiosPrivate from "../Api/AxiosPrivate";

const useToken = user => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email
      if (email) {
        const { data } = await axiosPrivate.post(`https://rasel-web-server.onrender.com/user/${email}`)
        localStorage.setItem('accessToken', data)
        setToken(data);
      }
    }
    getToken();

  }, [user])
  return [token]
}

export default useToken;