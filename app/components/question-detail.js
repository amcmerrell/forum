import Ember from 'ember';

export default Ember.Component.extend({
  questionBoard: Ember.inject.service(),
  displayPinButton: Ember.computed('question', function() {
    var questionBoard = this.get('questionBoard');
    var question = this.get('question');
    return questionBoard.isPinned(question);
  }),

  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    pinQuestion(question) {
      this.get('questionBoard').add(question);
    },
    removeQuestion(question) {
      this.get('questionBoard').remove(question);
    }
  }
});
