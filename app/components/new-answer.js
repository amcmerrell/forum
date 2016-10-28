import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    addNewAnswer() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        title: this.get('title'),
        author: this.get('author')
      };
      if ((params.title === undefined) || (params.author === undefined)) {
        alert("Please fill out all fields before submitting.");
      } else {
        this.set('title', "");
        this.set('author', "");
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer', params);
      }
    }
  }
});
