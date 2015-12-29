import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    onClientSelected(client) {
      this.set('selectedClient', client);
    }
  }

});
