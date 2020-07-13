import React from 'react'
import { render } from '@testing-library/react'

export default function CatCard({cat}){
    function renderCategory(){
    return cat.categories ? <p>{cat.categories[0].name}</p> : <p>No hay categorías</p>
    }
    return(
        <div className="card">
        <h2>{cat.id}</h2>
        {renderCategory()}
        <p>descripción del gato</p>
        <img width="200" src={cat.url}/>
        <span>link que te lleva a ver la tumba del gato</span>
    </div>
    )
    
}

