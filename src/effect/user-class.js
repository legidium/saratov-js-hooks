import React from "react"
import { URL } from "./constants"

class User extends React.Component {
 state = { data }

 componentDidMount() {
  this.fetchUser()
 }

 componentDidUpdate(prev) {
  if (this.props.id !== prev.id) {
   this.fetchUser()
  }
 }

 fetchUser() {
  fetch(`${URL}/${this.props.id}`)
   .then(response => response.json())
   .then(data => this.setState({ data }))
 }

 // ...
 
 render() {
  const { data } = this.state;
  return data && <div>{data.name}</div>
 }
}

export default Button;
