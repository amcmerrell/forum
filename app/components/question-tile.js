import Ember from 'ember';

export default Ember.Component.extend({
  questionBoard: Ember.inject.service(),

  actions: {
    pinQuestion(question) {
      this.get('questionBoard').add(question);
    },
  }
});
