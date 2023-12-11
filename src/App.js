import './App.css';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import { routes } from './routes';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  dark: state.site.dark,
  user: state.auth.user
})

function App({dark, user}) {

  return (
    <Router>
      <div className={dark ? 'dark' : 'light'}>
        <SiteHeader></SiteHeader>
        <Routes>
          {routes.map((route, index) => (
            <Route exact={route.exact} path={route.path}
             key={index} element={route.auth && !user ? <Navigate to="/login"></Navigate> : <route.component />}>
            </Route>
          ))}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps) (App);
