import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		return this.store.findRecord('brew', params.brew_id);
	},

	actions: {
		save(curBrew) {
			alert('implement save action');
		},

		cancel() {
			this.transitionTo('my-brews.in-progress');
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}
	}

});