import React, { useState } from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {
  const [color, setColor] = useState('teal')
    const calcWindowFrames = (num) => {
        return (window.innerHeight * num) + (window.innerHeight * 0.6)
    }
    const changeBackground = () => {
        if (window.scrollY < calcWindowFrames(0)) {
            setColor('teal');
        } else if (window.scrollY >= calcWindowFrames(0) && window.scrollY < calcWindowFrames(1)) {
            setColor('orange');
        } else if (window.scrollY >= calcWindowFrames(1) && window.scrollY < calcWindowFrames(2)) {
            setColor('yellow');
        } else if (window.scrollY >= calcWindowFrames(2) && window.scrollY < calcWindowFrames(3)) {
            setColor('blue');
        } else if (window.scrollY >= calcWindowFrames(3)) {
            setColor('red');
        }
    }
    window.addEventListener('scroll', changeBackground)

  return (
    <div className={"app " + color}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
