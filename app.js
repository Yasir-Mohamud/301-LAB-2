'use strict';

const keywordArr = [];
const imageCollection = [];
function Animal (obj) {
  this.image_url = obj.image_url;
  this.title = obj.title;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horns = obj.horns;
  imageCollection.push(this);
}

Animal.prototype.render = function() {
  let template = $('#photo-template').html();

  let $section = $('<section></section>');
  $section.html(template);

  $section.find('h2').text(this.title);
  $section.find('img').attr('src',this.image_url);
  $section.find('p').text(this.description);

  $('main').append($section);
};

Animal.prototype.dropMenu = function () {
  if(!keywordArr.includes(this.keyword)) {
    keywordArr.sort().push(this.keyword)
    let $option = $('<option></option>')
    $option.text(this.keyword)
    $('select').append($option);
  }
}







$.ajax('data/page-1.json' , {METHOD:'GET' , DATATYPE:'JSON'})
  .then(data => {
    data.forEach(animal => {

      new Animal(animal).render();
      new Animal(animal).dropMenu();
      new Animal(animal).filter();
     
      console.log(animal.keyword);
    });
     
    
  });
