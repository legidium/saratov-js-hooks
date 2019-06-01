import React, { useState, useEffect } from "react";
import { URL } from "./constants";

function User({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);

  return data && <div>{data.name}</div>;
}

export default User;
