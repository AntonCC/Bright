import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import BlurWrapper from './components/blur-wrapper/blur-wrapper.component'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component.jsx'
import Home from './pages/home/home.component'
import Services from './pages/services/services.component'
import About from './pages/about/about.component'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/services', name: 'Services', component: Services},
  {path: '/about', name: 'About', component: About}
]

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  // const [backdrop, setBackdrop] = useState(false)
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
