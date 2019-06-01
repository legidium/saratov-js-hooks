import React, { useState } from "react"

function Layout({ id }) {
 const [width, setWidth] = useState(0)

 useEffect(() => {
  addEventListener('resize', handle)
  handle()
  return () => {
   removeEventListener('resize', handle)
  }
 }, [])

 useEffect(() => {
  fetchData(id)
 }, [id]);


 function handle() {
  // ...
 }

 function fetchData() {
  // ...
 }

 return null;
}


export default Layout;
