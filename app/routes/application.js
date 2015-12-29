import Ember from 'ember';

export default Ember.Route.extend({
  selectedClient: null,
  model() {
    return this.store.findAll('client');
  }
});
