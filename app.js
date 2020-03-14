'use strict';

const keywordArr = [];
const animalCollection = [];


function Animal (obj) {
  this.image_url = obj.image_url;
  this.title = obj.title;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horns = obj.horns;
  animalCollection.push(this);
}

Animal.prototype.render = function() {
  let template = $('#photo-template').html();

  let $section = $(`<section id=${this.keyword}></section>`);
  $section.html(template);
  $section.find('h2').text(this.title);
  $section.find('img').attr('src',this.image_url);
  $section.find('p').text(this.description);
  $('main').append($section);
};

Animal.prototype.dropMenu = function () {
  if(!keywordArr.includes(this.keyword)) {
    keywordArr.push(this.keyword)
    let $option = $(`<option value=${this.keyword}></option>`)
    $option.text(this.keyword)
    $('select').append($option);
  }
}




function filter(event) {
  let id = event.target.value;

  animalCollection.forEach(animal => {
    $(`section[id=${animal.keyword}]`).show();
    if(id !== animal.keyword) {
      console.log(id)
      console.log(animal.keyword);
      $(`section[id=${animal.keyword}]`).hide();
    
    } 


  })



}





$.ajax('data/page-1.json' , {METHOD:'GET' , DATATYPE:'JSON'})
  .then(data => {
    data.forEach(animal => {
      new Animal(animal).render();
      new Animal(animal).dropMenu();
    });
  });

$('select').on('change', filter )

