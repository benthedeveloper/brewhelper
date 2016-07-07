import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			allBrews: this.store.findAll('brew'),
			inProgressBrews: this.store.query('brew', { filter: { isCompleted: false } }),
			completedBrews: this.store.query('brew', { filter: { isCompleted: true } })
		})
	}

});