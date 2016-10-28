import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        author: this.get('author'),
      }
      if ((params.title === undefined) || (params.details === undefined) || (params.author === undefined)) {
        alert("Please fill out all fields before submitting.");
      } else {
        this.set('title', "");
        this.set('details', "");
        this.set('author', "");
        this.sendAction('saveQuestion', params);
      }
    },
  }
});
