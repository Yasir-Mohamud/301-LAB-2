'use strict';

let notKeywordArr = [];
let imageCollection = [];
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
const selectKeywords = () => {
  // imageCollection.forEach(obj=>{
  //   if(!notKeywordArr.includes(obj.keyword)) {
  //     !notKeywordArr.push(obj.keyword)
  //     console.log('hello' + !notKeywordArr)
  //   }
  // })

  let $select = $('<select></select>').html();
  $select.find('option').j



}



$.ajax('data/page-1.json' , {METHOD:'GET' , DATATYPE:'JSON'})
  .then(data => {
    data.forEach(animal => {
      console.log(data);
      new Animal(animal).render();
      console.log(animal)
    });
    selectKeywords();
  });
