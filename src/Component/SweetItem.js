import React from 'react';
import $ from 'jquery'; 
import Sweet from './Sweet';

const getRandomInt=(min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class SweetItem extends React.Component{

  componentDidMount() {
    this.getComment();
  }

  getComment(){ 
    var dataUrl = "https://raw.githubusercontent.com/emanpicar/sweets-api/master/jsondata/sweets.json";
    var data = $.getJSON(dataUrl); 
    data.done( function( msg ) 
    { 
        $.each(msg, function(i,item) {
            var PicNum = getRandomInt(1, 7);
                $("#portfolioModal").html();
                $("#portfolioModal").append($(
                    
                        '<div class="portfolio-modal modal fade" id="portfolioModal'+item.productId+'" tabindex="-1" role="dialog" aria-hidden="true">'+
                            '<div class="modal-dialog">'+
                                '<div class="modal-content">'+ 
                                    '<div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>'+
                                    '<div class="container">'+
                                        '<h2 class="text-uppercase">'+item.name+'</h2>'+
                                        '<p class="item-intro text-muted">'+item.description+'</p>'+
                                        '<img class="img-fluid d-block mx-auto" src="assets/img/portfolio/s1.jpeg " alt="..." />'+
                                        '<p>'+item.story+'</p>'+
                                        '<ul class="list-inline">'+
                                            '<li>'+
                                                '<strong>Allergy Info:</strong>'+item.allergy_info+
                                            '</li>'+
                                            '<li>'+
                                                '<strong>Dietary Certifications:</strong>'+ item.dietary_certifications+
                                            '</li>'+
                                        '</ul>'+
                                        '<button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">'+
                                        '<i class="fas fa-times me-1"></i>'+
                                        'Close Project'+
                                    '</button>'+ 
                                '</div> </div> </div>'+
                            '</div>'));
            
        });
    })

    data.fail( function( msg ) 
    {
      console.log(msg);
    })
  }
    render(){
        return(
            <div>
                
                <div id="portfolioModal">
                
                </div>
            </div>
            
        )
    }
}