import { useState } from "react"

function useFetchData(id) {
 conts [data, setData] = useState()

 useEffect(() => {
  fetch(`/data/${id}`)
   .then(response => response.json())
   .then(data => setData(data))
 }, [id])

 return data
}

return default useFetchData
