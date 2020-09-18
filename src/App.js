import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme'
import Navbar from './components/ui/Navigation'
import Footer from './components/ui/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Estimate from './pages/Estimate'
import Software from './pages/SoftwareService'
import Web from './pages/WebService'
import Mobile from './pages/MobileService'

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/services/mobile">
            <Mobile />
          </Route>
          <Route path="/services/software">
            <Software />
          </Route>
          <Route path="/services/web">
            <Web />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/estimate">
            <Estimate />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

    
  );
}

export default App;
