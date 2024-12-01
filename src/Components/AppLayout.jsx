import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'

const AppLayout = () => {

  const navigation = useNavigation();

  if (navigation === true) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }
else {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
 
}

export default AppLayout