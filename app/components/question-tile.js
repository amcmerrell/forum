import Ember from 'ember';

export default Ember.Component.extend({
  questionBoard: Ember.inject.service(),
  displayPinButton: Ember.computed('question', function() {
    var questionBoard = this.get('questionBoard');
    var question = this.get('question');
    return questionBoard.isPinned(question);
  }),

  actions: {
    pinQuestion(question) {
      this.get('questionBoard').add(question);
      this.sendAction('reloadPage');
    },
    removeQuestion(question) {
      this.get('questionBoard').remove(question);
      this.sendAction('reloadPage');
    }
  }
});
