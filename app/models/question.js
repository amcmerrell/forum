import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  details: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
});
