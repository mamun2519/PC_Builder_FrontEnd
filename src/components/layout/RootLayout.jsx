import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const RootLayout = ({children}) => {
      return (
            <div>
                  <Navbar/>
                  <div className=''>{children}</div>
                  <Footer></Footer>
            </div>
      );
};

export default RootLayout;