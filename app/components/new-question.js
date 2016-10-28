import Ember from 'ember';

export default Ember.Component.extend({
  saveQuestion() {
    var params = {
      title: DS.attr(),
      details: DS.attr(),
      author: DS.attr(),
    }
    this.sendAction('saveQuestion', params);
  }
});
