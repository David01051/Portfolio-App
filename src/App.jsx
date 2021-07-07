import './App.css';
import React, { useContext } from 'react'
import HeaderNav from './Components/HeaderNav/HeaderNav'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Portfolio from './Components/portfolio/portfolio'
import Input from './Components/Input/Input'
import MyProject from './Components/MyProject/MyProject'
import Footer from './Components/Footer/Footer'
import TimeLine from './Components/TimeLine/TimeLine'
import Button from './Components/Button/Button'
import { UseProvider } from './Components/Context/Context'



const homePageInfo = {
  hello: 'I Am,',
  title: 'David Talala',

}

function App() {
  return (
    <UseProvider value={homePageInfo}>
      <HeaderNav />

     {/* <Footer/> */}

    </UseProvider>
  );
}

export default App;
