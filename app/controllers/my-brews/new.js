import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    // queryPizzas: function(query, deferred) {
    //   this.store.find('myModel', { name: query.term })
    //     .then(deferred.resolve, deferred.reject);
    // }
    queryBrews(query, deferred) {
    	console.log('called queryBrews with query:');
    	console.log(query);
    }
  }
});