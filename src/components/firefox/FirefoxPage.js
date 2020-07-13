import React, {Component} from 'react'
import Firefox from './Firefox'

class FirefoxPages  extends Component{
    componentWillMount(){
        console.log("antes de montar")
    }

    componentDidMount() { /// si quieres tomar un nodo toma este
        console.log("ya me monté")
    }

    componentWillUnmount(){
        console.log("me voy a desmontar")
    }
    render(){
        return(
            <div>
                <Firefox/>
            </div>
        )
    }
}

export default FirefoxPages