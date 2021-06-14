import React, { Component } from 'react';
import Navigation from './Navigation';
import Masthead from './Masthead';
import Services from './Services';
import Footer from './Footer'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Navigation />
                <Masthead />
                <Services />
                <Footer />
            </div>
        )
    }
}