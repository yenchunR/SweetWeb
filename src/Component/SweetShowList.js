import React from 'react';
import $ from 'jquery'; 

const getRandomInt=(min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class SweetShowList extends React.Component{

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
        
        $("#ShowList").html();
        $("#ShowList").append($(
                    '<div class="col-lg-4 col-sm-6 mb-4">'+
                        '<div class="portfolio-item">'+ 
                            '<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal'+item.productId+'" >'+
                                '<div class="portfolio-hover">'+
                                    '<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>'+
                                '</div>'+
                                '<img class="img-fluid" src="assets/img/portfolio/'+ PicNum +'.jpeg" alt="..." />'+
                            '</a>'+
                        '<div class="portfolio-caption">'+
                            '<div class="portfolio-caption-heading">'+ item.name +'</div>'+
                            '<div class="portfolio-caption-subheading text-muted">Illustration</div>'+
                        '</div>'+
                    '</div>'));
        });
    })

    data.fail( function( msg ) 
    {
      console.log(msg);
    })
  }
  render() {
    return (
        <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Portfolio</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div class="row" id="ShowList">
                
            </div>
        </div>
        </section>
    );
  }
}