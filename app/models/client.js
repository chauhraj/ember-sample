import DS from 'ember-data';

export default DS.Model.extend({
  count: DS.attr(),
  shares: DS.attr(),
  notional: DS.attr(),
  commissions: DS.attr()
});
