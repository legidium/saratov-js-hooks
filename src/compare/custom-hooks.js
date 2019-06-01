import React from "react";
import useWindowResize from "./use-window-resize"
import useFetchData from "./use-fetch-data"

function Layout({ id }) {
  const width = useWindowResize()
  const data = useFetchData(id)
  
  // ...
}

export default Layout
