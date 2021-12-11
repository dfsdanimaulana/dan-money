import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// hooks
import { useAuthContext } from './hooks/useAuthContext'
// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

// components
import Navbar from './components/Navbar'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
        { authIsReady && (
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                { user ? <Home /> : <Redirect to="/login" /> }
              </Route>
              <Route path="/login">
                { !user ? <Login /> : <Redirect to="/" /> }
              </Route>
              <Route path="/signup">
                { !user ? <Signup /> : <Redirect to="/" /> }
              </Route>
            </Switch>
          </Router>
        )}
    </div>
  )
}

export default App
