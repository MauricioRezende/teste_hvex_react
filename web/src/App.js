import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
        <div className="container">
            <div className="container">
                <Header />
                <Routes />
                <GlobalStyle />
                <Footer />
            </div>
        </div>
    </>
  );
}

export default App;
