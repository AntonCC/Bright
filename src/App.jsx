import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import ScrollTop from './components/scroll-top/scroll-top.component'
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import BlurWrapper from './components/blur-wrapper/blur-wrapper.component'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component.jsx'
import Home from './pages/home/home.component'
import Services from './pages/services/services.component'
import About from './pages/about/about.component'
import Try from './pages/try/try.component'
import Contact from './pages/contact/contact.component'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/services', name: 'Services', component: Services},
  {path: '/about', name: 'About', component: About},
  {path: '/try', name: 'Try', component: Try},
  {path: '/contact', name: 'Contact', component: Contact}
]

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  const [appBlur, setAppBlur] = useState(false)

  const openSidebar = () => {
    setSidebar(true)
    setAppBlur(true)
  }

  const closeSidebar = () => {
    setSidebar(false)
    setAppBlur(false)
  }

  let renderBackdrop
  if(sidebar) {
    renderBackdrop = <Backdrop handleSidebar={closeSidebar}/>
  }

  return (
    <div className="App">
      <ScrollTop />
      <Sidebar open={sidebar} handleSidebar={closeSidebar}/>
      {renderBackdrop}
      <BlurWrapper open={appBlur}>
        <Navbar handleSidebar={openSidebar}/>
        {routes.map(({path, name, component}) => (
          <Route key={ name } exact path={ path } component={ component } />
        ))}
        <Footer />
      </BlurWrapper>
    </div>
  );
}

export default App;
