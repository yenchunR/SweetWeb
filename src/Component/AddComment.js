import React, { Component } from 'react';

export default class AddComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            UserName:'',
            UserComment: '',
            Url: 'https://myhelloqq.herokuapp.com/myhello/listcomment/',
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleName = this.handleName.bind(this);
        
    }
    handleName(Name){
        console.log("hi");
        this.setState({
            UserName: Name.target.value,
            Url:'https://myhelloqq.herokuapp.com/myhello/addcomment/?name='+Name.target.value,
          });
        
        
    }
    handleComment(Comment){
        this.setState({
            UserComment: Comment.target.value,
            Url:'https://myhelloqq.herokuapp.com/myhello/addcomment/?name='+this.state.UserName+'&comment='+Comment.target.value,
          })
          console.log(this.state.Url);
    }

    
    render(){
        return(
            <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">評論區</h2>
                    <h3 class="section-subheading text-muted">Let's write down your comment!</h3>
                </div>
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                    <div class="col-md-12">
                            <div class="form-group">
                                
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" onChange={this.handleName}/>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div class="form-group mb-md-0">
                                
                                <input class="form-control" id="phone" placeholder="Your Comment *" data-sb-validations="required" onChange={this.handleComment}/>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A comment number is required.</div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                                請點擊連結送出評論
                            <br />
                            <a target="_blank" href={this.state.Url} >{this.state.Url}</a>
                        </div>
                    </div>
                    
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">確認</button></div>
                </form>
            </div>
        </section>
        )
    }
}