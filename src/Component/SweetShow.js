import React, { Component } from 'react';
import Navigation from './Navigation';
import SweetShowList from './SweetShowList';
import SweetItem from './SweetItem';
import Footer from './Footer'

export default class SweetShow extends Component{

    render(){
        return(
            <div>
                <Navigation />
                <SweetShowList />
                <SweetItem />
                <Footer />
            </div>
        )
    }
}