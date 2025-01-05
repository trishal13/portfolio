// onhover torch effect only on cards
import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;