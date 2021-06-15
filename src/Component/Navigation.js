import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" fixed='top'>
                <div class="container">
                
                    <Link to="/" class="navbar-brand"><img src="assets/img/navbar-logo.svg" alt="..." /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><Link to="/SweetShow" class="nav-link">SweetStory</Link></li>
                            <li class="nav-item"><Link to="/Comment" class="nav-link">Comment</Link></li>
                            <li class="nav-item"><Link to="/SearchPhoto" class="nav-link">Photo</Link></li>
                            <li class="nav-item"><Link to="/Team" class="nav-link">Team</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}