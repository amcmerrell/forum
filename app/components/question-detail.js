import Ember from 'ember';

export default Ember.Component.extend({
  questionBoard: Ember.inject.service(),

  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    pinQuestion(question) {
      this.get('questionBoard').add(question);
    },
  }
});
