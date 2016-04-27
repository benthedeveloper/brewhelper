import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var brews = this.store.findAll('brew'); // => GET /brews
		//return brews;
	}
});