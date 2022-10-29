import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Repository from './pages/Repository';
import GlobalStyles from './styles/global.styles';

function App() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar blackHeader={blackHeader} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path="/repository/:repository"
            element={<Repository />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
