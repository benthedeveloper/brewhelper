import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('my-brews', function() {
      this.route('new');
      this.route('in-progress');
      this.route('completed');
      this.route('brew', { path: '/brew/:brew_id' });
    });
  this.route('test-components');
});

export default Router;