import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  upvotes: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
});
