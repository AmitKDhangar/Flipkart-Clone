import { useEffect, useState } from "react";
export const UseFetch = (url) => {
  const [data, setdata] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState(true);
  const fetchdata = async (url) => {
    try {
      let fetcheddata = await fetch(url);
      let fetchdata = await fetcheddata.json();
      setdata(fetchdata);
    } catch (err) {
      seterror(err);
      setloading(false);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchdata(url);
  }, [url]);

  return [data, error, loading];
};
