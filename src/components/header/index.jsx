import React, { Component } from 'react'
import "./sass/style.scss"
export default class index extends Component {
    render() {
        return (
            <div >

                    <div id="navigation-bar">
                        <nav>
                <div class='container'>
                            <ul>
                                <li><a href="#" id="logo">LOGO</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <a href="#" id="menu-icon"></a>
                            </ul>
                    </div>
                        </nav>


                </div>
            </div>
        )
    }
}
