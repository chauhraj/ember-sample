import Ember from 'ember';

export default Ember.Controller.extend({

  clients: null,
  
  actions: {
    onClientSelected(client) {
      this.set('selectedClient', client);
    }
  }

});
