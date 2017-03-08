import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.transitionTo('home');
  },

  actions: {
    gallery(){
      this.transitionTo('gallery');
    },
    home(){
      this.transitionTo('home');
    }
  }
});
