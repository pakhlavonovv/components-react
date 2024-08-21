import React, { Component } from 'react'
import nature from '../../assets/nature.jpg'
import "./style.scss"

export default class index extends Component {
    render() {
        const {products} = this.props
    return (
        <div className="container">
        <div className="card-page">
        {
            products.map((item, index) => {
                return <div key={index} className='card-item'>
                    <img src={item.img} alt="" />
                    <div className="p-2 info">
                        <h2 className='fs-4'>{item.name}</h2>
                        <p>${item.description}</p>
                        <div className="d-flex justify-content-between">
                            <span>{item.price}</span>
                            <i class="fa-solid fa-cart-shopping"></i>                                </div>
                    </div>
                </div>
            })
        }
    </div>
        </div>
    )
  }
}
