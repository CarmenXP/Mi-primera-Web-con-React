import React, {Component} from 'react'
import Developers from './Developers'
import { Progress } from 'antd';

class DevelopersPages  extends Component{
    render(){
        return(
            <div>
                <Developers/>
                <Progress
                percent={50}
                strokeColor={"blue"}
                />

                
            </div>
        )
    }
}

export default DevelopersPages