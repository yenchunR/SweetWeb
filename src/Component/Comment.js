import React, { Component } from 'react';
import Navigation from './Navigation';
import CommentList from './CommentList';
import Footer from './Footer'
import AddComment from './AddComment';

export default class Comment extends Component{
    render(){
        return(
            <div>
                <Navigation />
                <CommentList />
                <AddComment />
                <Footer />
            </div>
            
        )
    }
}