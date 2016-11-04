import Ember from 'ember';

export default Ember.Service.extend({
  pins: [],

  add(pinnedQuestion) {
    this.get('pins').pushObject(pinnedQuestion);
  }
});
