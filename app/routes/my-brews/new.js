import config from '../../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// test
		var breweryDBKey = config.breweryDBKey;
		console.log(breweryDBKey);
	}
});