import React, { Component } from 'react'
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
