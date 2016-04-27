import Ember from 'ember';

export default Ember.Controller.extend({
	openModal: false,  // for modal
	
	progressValue: 4, // for progress-bar
	progressValue1: 35,
	progressValue2: 20,
	progressValue3: 10,

	actions: {
		// for modal
		openModal() {
			this.set('openModal', true);
		}
	}
});
