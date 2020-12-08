import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/post' component={Post} />
          <Route path='/post/:slug' component={SinglePost} />
          <Route path='/project' component={Project} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
