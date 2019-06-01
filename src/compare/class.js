import React from "react"

class Layout extends React.Component {
 state = { width: 0 }

 componentDidMount() {
  addEventListener('resize', this.handle)
  this.handle()
  this.fetchData()
 }

 componentDidUpdate(prev) {
  if (this.props.id !== prev.id) {
   this.fetchData()
  }
 }
 
 componentWillUnmount() {
  removeEventListener('resize', this.handle)
 }

 handle () => {
  // ...
 }

 fetchData = () => {
  // ...
 }

 render() {
  return null;
 }
}
