import React from 'react';
import Header from './components/Header';

function App() {
  const header = {
    logo: {
      url: './images/developing-white-logo.png',
      alt: 'Developing S.A.S White Logo',
    },
    nav: {
      options: [
        {
          option: 'Nosotros',
          slug: 'about',
        },
        {
          option: 'Servicios',
          slug: 'services',
        },
        {
          option: 'Referencias',
          slug: 'processes',
        },
        {
          option: 'Contáctanos',
          slug: 'https://api.whatsapp.com/send/?phone=573013979878',
        },
      ],
    },
  };

  return (
    <div className="App">
      <Header logo={header.logo} nav={header.nav} />
    </div>
  );
}

export default App;
