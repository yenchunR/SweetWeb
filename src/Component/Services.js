import React, { Component } from 'react';
import CakeSharpIcon from '@material-ui/icons/CakeSharp';
import MessageIcon from '@material-ui/icons/Message';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { Link } from "react-router-dom";

export default class Services extends Component{
    render(){
        return(
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">What We Offer</h3>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <Link to="/SweetShow">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <CakeSharpIcon class=" fa-stack-1x fa-inverse" style={{width:'50%', fill: "white"}}/>
                                </span>
                            </Link>
                            <h4 class="my-3">Sweet Story & Info</h4>
                            <p class="text-muted">The Cake Story has just launched this premiere website to add sweetness in your routine life without you making an extra attempt.</p>
                        </div>
                        <div class="col-md-4">
                            <Link to="/Comment">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <MessageIcon class=" fa-stack-1x fa-inverse" style={{width:'50%', fill: "white"}}/>
                                </span>
                            </Link>
                            <h4 class="my-3">Comment Site</h4>
                            <p class="text-muted">Show your comment on our stream. Use our easy to chat to keep your viewers in the loop.</p>
                        </div>
                        <div class="col-md-4">
                            <Link to="/SearchPhoto">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <ImageSearchIcon class=" fa-stack-1x fa-inverse" style={{width:'50%', fill: "white"}}/>
                                </span>
                            </Link>
                            <h4 class="my-3">Search Photo</h4>
                            <p class="text-muted">The best free stock photos & videos shared by talented creators in Pexels.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}