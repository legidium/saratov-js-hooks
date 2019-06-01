import React, {useEffect} from "react"
import useFetchUser from './use-fetch-user.js'

function User({ id }) {
 const data = useFetchUser(id)
 return data && <div>{data.name}</div>
}

export default User
