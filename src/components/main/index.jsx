import React, { Component } from 'react'
import Img from '../../assets/nature.jpg'
import Card from "../card-page"
import "./sass/style.scss"

export default class index extends Component {
    state = {
        products: [
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img},
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img},
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img},
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img},
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img},
            {id: 1, name: "Product-1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', price: 1234, color: 'crimson', img:Img}
        ]
    }
    render() {
        const {products} = this.state
        return (
            <div>
                <h1 className='text-center'>Products</h1>
                <Card products={products}/>
            </div>
        )
    }
}
