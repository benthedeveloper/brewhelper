import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  style: attr(),
  img: attr('string'),
  tags: hasMany('tag'),  // many-to-many: brew can have many tags
  description: attr('string'),
  dateStarted: attr('date'),
  dateFinished: attr('date'),
  isCompleted: attr('boolean'),
  og: attr('number'),
  fg: attr('number'),
  abv: attr('number')
});
