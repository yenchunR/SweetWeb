import React, { Component } from 'react';
import axios from 'axios';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class TeamMember extends Component{
    constructor(props){
        super(props);
        this.JsonUrl = "https://api.github.com/users/yenchunR";
        this.state = {
            userName: '',
            githubUrl: '',
            avataUrl: '',
            Followers: '',
            Followings: '',
            Location: '',
            Blog: '',
        }
    }
    componentDidMount(){
        axios.get(this.JsonUrl).then(result =>{
            console.log(result);
            const data = result.data;
            if(data){
                this.setState({
                    userName: data.login,
                    githubUrl: data.html_url,
                    avataUrl: data.avatar_url,
                    Followers: data.followers,
                    Followings: data.following,
                    Location: data.location,
                    Blog: data.blog,
                });
            }
        });
    }

    render(){
        return(
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">The trees, like the longings of the earth, stand atiptoe to peep at the heaven.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4" style={{margin:'0 auto'}}>
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={this.state.avataUrl} alt="..." />
                                <h4>{this.state.userName}</h4>
                                <p class="text-muted">Team Leader</p>
                                <ListItem button component="a" href={this.state.githubUrl}>
                                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                                    <ListItemText primary="Github Link" />
                                </ListItem>
                                
                                <ListItem text>
                                    <ListItemIcon><LocationOnIcon /></ListItemIcon>
                                    <ListItemText primary={this.state.Location} />
                                </ListItem>
                                <ListItem text>
                                    <ListItemIcon><PersonAddRoundedIcon /></ListItemIcon>
                                    <ListItemText primary={this.state.Followers} />
                                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                                    <ListItemText primary={this.state.Followings} />
                                </ListItem>
                                <ListItem button component="a" href={this.state.Blog}>
                                    <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
                                    <ListItemText primary="My BLOG Link" />
                                </ListItem>
                                
                            </div>
                        </div> 
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <h4 class="section-heading text-uppercase">Reference</h4>
                            <p class="large text-muted">
                                <h5>React</h5><h5>Django</h5>
                                <h6>https://startbootstrap.com/previews/agency</h6>
                                <h6>https://www.pexels.com/</h6>
                                <h6>https://github.com/emanpicar/sweets-api/blob/master/jsondata/sweets.json</h6>
                                <h6>https://material-ui.com/zh/components/material-icons/#api</h6>
                                <h6>https://github.com/andreysaf/react-pexels-search</h6>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}