import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProjectsPage from './components/projects/ProjectsPage'
import AboutPage from './components/about/AboutPage'
import FirefoxPages from './components/firefox/FirefoxPage'
import HomePages from './components/home/HomePage'
import DevelopersPages from './components/developers/DevelopersPage'

function Routes(){
    return(
        <Switch>
            <Route exact path ="/" componet={HomePages}/>
            <Route path="/firefox" component={FirefoxPages}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route path="/developers" component={DevelopersPages}/>
            <Route path="/about" component={AboutPage}/>
        </Switch>
    )
}

export default Routes