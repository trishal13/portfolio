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


// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import { Outlet } from "react-router-dom";
// import Footer from './Footer';

// const Layout = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className='bg-black text-white relative min-h-screen overflow-hidden'>
//       <div
//         className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300 ease-in-out"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,0,0.15), transparent 20%)`
//         }}
//       />
//       <div className="relative z-40">
//         <Header />
//         <Outlet />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Layout;

// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import { Outlet } from "react-router-dom";
// import Footer from './Footer';

// const Layout = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className='bg-black text-white relative min-h-screen overflow-hidden'>
//       <div
//         className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300 ease-in-out"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 20%)`
//         }}
//       />
//       <div className="relative z-40">
//         <Header />
//         <Outlet />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Layout;