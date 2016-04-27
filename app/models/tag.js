import Model from 'ember-data/model';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  brews: hasMany('brew')  // many-to-many: tag can have many brews it belongs to
});