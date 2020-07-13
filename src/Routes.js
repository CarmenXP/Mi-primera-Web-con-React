import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProjectsPage from './components/projects/ProjectsPage'
import AboutPage from './components/about/AboutPage'
import FirefoxPages from './components/firefox/FirefoxPage'
import HomePages from './components/home/HomePage'
import DevelopersPages from './components/developers/DevelopersPage'
import CatsPage from './components/cats/catsPage'

function Routes(){
    return(
        <Switch>
            <Route exact path ="/" component={HomePages}/>
            <Route  path="/firefox" component={FirefoxPages}/>
            <Route  path="/projects" component={ProjectsPage}/>
            <Route  path="/developers" component={DevelopersPages}/>
            <Route  path="/about" component={AboutPage}/>
            <Route path="/cats" component={CatsPage}/>
        </Switch>
    )
}

export default Routes