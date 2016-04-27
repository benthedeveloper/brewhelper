import Ember from 'ember';

export default Ember.Route.extend({
	redirect() {
		this.transitionTo('my-brews.in-progress');
	}
});