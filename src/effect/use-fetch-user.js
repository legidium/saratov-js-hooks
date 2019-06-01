import { useState, useEffect } from "react";
import { URL } from "./constants";

function useFetchUser(id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let canceled = false;

    fetch(`${URL}/${id}`)
      .then(response => response.json())
      .then(data => !canceled && setData(data));

    return () => (canceled = true);
  }, [id]);

  return data;
}

export default useFetchUser;
