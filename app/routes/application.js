import Ember from 'ember';

export default Ember.Route.extend({
  selectedClient: null,
  model() {
    return this.store.findAll('client');
  },

  setupController: function(controller, model) {
    controller.set('clients', model);
    controller.set('selectedClient', model.get('firstObject'));
  }
});
