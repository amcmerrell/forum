import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addVote(answer) {
      this.sendAction('addVote', answer);
    }
  }
});
