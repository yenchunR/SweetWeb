import React from 'react';
import $ from 'jquery'; 

const getRandomInt=(min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class CommentList extends React.Component{

  componentDidMount() {
    this.getComment();
  }

  getComment(){ 

    var dataUrl = "https://myhelloqq.herokuapp.com/myhello/listcomment/";
    var data = $.getJSON(dataUrl); 
    data.done( function( msg ) 
    { 
      
      $.each(msg, function(i,item) {
        var UserName = item.name;
        var UserComment = item.comment;
        if (UserName === '') {
          UserName = 'milk';
        }
        if (item.comment === '') {
          UserComment = 'O Troupe of little vagrants of the world, leave your footprints in my words.';
        }

        var str = '';
        if(i % 2 == 1){
          str = '' ;
        }
        else{
          str = 'class="timeline-inverted"';
        }
        var PicNum = getRandomInt(1, 4);
        
        var date = item.created_at.substring(0,10);
        var time= item.created_at.substring(11,22);
      $("#CommentLine").html();
      $("#CommentLine").append($(
                    '<li ' + str+' >'+
                      '<div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/'+ PicNum + '.jpg" alt="..." /></div>'+ 
                      '<div class="timeline-panel">'+
                        '<div class="timeline-heading">'+
                          '<h4>'+date+'</h4>'+
                          '<h5>'+time+'</h5>'+
                          '<h4 class="subheading">' + UserName +'</h4>'+
                        '</div>'+
                        '<div class="timeline-body"><p class="text-muted">' + UserComment + '</p></div>'+
                      '</div>'+
                    '</li>'
                    ));
          });
    })

    data.fail( function( msg ) 
    {
      console.log(msg);
    })
  }
  render() {
    return (
      
      <section class="page-section" id="about">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">CommentList</h2>
              <h3 class="section-subheading text-muted">What you want to say ?</h3>
          </div>
          <ul class="timeline" id="CommentLine">
              
          </ul>
          <ul class="timeline">
          <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
            </li>
          </ul>

      </div>
    </section>
    );
  }
}