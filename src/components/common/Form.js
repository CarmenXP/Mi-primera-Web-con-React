import React, {Component} from 'react'
import {Input, Select} from 'antd'


const{Option}= Select;

class Form extends Component{

    state={
        form:{
            name:"",
            email:"",
            tel:"",
            age:"",
            message:"",
        }
    }

    handleChange=e=>{
        let{name:field, value}= e.target
        let {form}= this.state
        form[field]= value
        this.setState({form})
    }
    
    render(){
        let {name, email, tel, age} = this.state.form

        return(
            <div>
                <h2>fORMULARIO</h2>

                <Input
                value={name}
                placeholder="write your name"
                onChange={this.handleChange}
                name="name"
                type="text"
                />
                <Input
                value={email}
                placeholder="write your email"
                onChange={this.handleChange}
                name="email"
                type="text"
                />
                <Input
                value={tel}
                placeholder="write your phone number"
                onChange={this.handleChange}
                name="tel"
                type="tex"
                />
                <Select  style={{width:200}} value={age} onChange={value=>this.handleChange({target:{name:"age", value}})}>
                    <Option value="29">
                        29 a 34
                    </Option>
                    <Option value="35">
                        35 a 39
                    </Option>
                    <Option value="40">
                        40
                    </Option>
                </Select>
            </div>
        )

    }
}

export default Form