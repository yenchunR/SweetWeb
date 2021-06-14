import React, { Component } from 'react';
import Navigation from './Navigation';
import Masthead from './Masthead';
import TeamMember from './TeamMember';
import Footer from './Footer'

export default class Team extends Component{
    render(){
        return(
            <div>
                <Navigation />
                <TeamMember />
                <Footer />
            </div>
        )
    }
}