import config from '../../config/environment';
import Ember from 'ember';

const { run, isBlank, inject } = Ember;
const breweryDBKey = config.breweryDBKey;

export default Ember.Controller.extend({
  ajax: inject.service(),

  actions: {

    searchStyles(term) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        run.debounce(this, this._performSearch, term, resolve, reject, 600);
      });
    }
    
  },

  // Private method: search styles on api.brewerydb.com/v2
  _performSearch(term, resolve, reject) {
    if (isBlank(term)) {
      return resolve([]);
    }
    this.get('ajax').request(`/search/style?q=${term}&key=${breweryDBKey}`)
      .then(json => resolve(json.data), reject);
  }

});
