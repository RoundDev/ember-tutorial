import Ember from 'ember';
let images = [{
  url: "lake.jpg"
},{
  url: "cherry-blossoms.jpg"
},{
  url: "temple.jpg"
},{
  url: "mt-fuji.jpg"
},{
  url: "Seiryuji-Temple.jpg"
},{
  url: "prayer.jpg"
}];
export default Ember.Route.extend({
  model(){
    return images;
  }
});
