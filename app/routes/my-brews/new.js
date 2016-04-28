import config from '../../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('brew');
	},

  actions: {

    save(newBrew) {
    	newBrew.set('dateStarted', new Date());
      newBrew.save().then((response) => {
        this.transitionTo('my-brews.in-progress');
      });
    },

    willTransition() {
    	this.controller.get('model').rollbackAttributes();
    }

  }

});