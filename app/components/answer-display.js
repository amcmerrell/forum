import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upvotes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),

  actions: {
    addVote(answer) {
      this.sendAction('addVote', answer);
    }
  }
});
