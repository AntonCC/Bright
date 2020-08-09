import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Navbar from './components/navbar/navbar.component'
import Home from './pages/home/home.component'
import Footer from './components/footer/footer.component.jsx'

const routes = [
  {path: '/', name: 'Home', component: Home}
]

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {routes.map(({path, name, component}) => (
        <Route key={ name } path={ path } component={ component } />
      ))}
      <Footer />
    </div>
  );
}

export default App;
