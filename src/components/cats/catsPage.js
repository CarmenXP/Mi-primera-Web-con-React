import React, { Component } from 'react'


class CatsPage extends Component{

    state={
        cats:[]
    }

    componentDidMount () {

        fetch("https://api.thecatapi.com/v1/images/search?limit=30&page=100&mime_types=gif&api_key=b4e8a552-5906-4f14-9a85-c78769892703",{
            method: "get",
            headers:{
                "x-api-key":"b4e8a552-5906-4f14-9a85-c78769892703",
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
    
            if(response.ok) return response.json()
            console.log(response.statusText) 
        })
        .then(data=>{
            this.setState({cats:data})
        })

    }


  // primer forma de renderizar 
      /*  render(){
            return (
                <div>
                    {this.state.cats.map(cat=><img width="120" src={cat.url}/>)}
                </div>
            )


        } */
    
// segunda manera de rendrizar

drawCat=cat=>{
    return <img width="120" src={cat.url}/>
}
render(){
    return(
        <div>
            {this.state.cats.map(this.drawCat)}

        </div>
    )
    }





}

export default CatsPage