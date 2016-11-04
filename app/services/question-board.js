import Ember from 'ember';

export default Ember.Service.extend({
  pins: [],

  add(pinnedQuestion) {
    var currentPins = this.get('pins');
    if (currentPins.contains(pinnedQuestion)) {
      alert("This question has already been pinned to your board.");
    } else {
      this.get('pins').pushObject(pinnedQuestion);
    }
  },
  isPinned(question) {
    var currentPins = this.get('pins');
    if (currentPins.contains(question)) {
      return true;
    } else {
      return false;
    }
  }
});
