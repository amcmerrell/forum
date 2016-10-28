import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        author: this.get('author'),
      }
      this.sendAction('saveQuestion', params);
    },
  }
});
