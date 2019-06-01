import { useState } from "react"

function useWindowResize() {
 const [width, setWidth] = useState(0)

 useEffect(() => {
  const handle = () => (
   setWidth(window.innerWidth)
  )
  addEventListener('resize', handle)
  handle()
  return () => (
   removeEventListener('resize', handle)
  )
 }, [])

 return width
}

return default useWindowResize
