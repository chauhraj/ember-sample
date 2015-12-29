export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)
      */

    // Example: return a single object with related models
    this.get('/clients', function() {

      return {
        data:[{
          type: 'clients',
          id: 1,
          attributes: {
              name: 'CAPITAL',
              count: 2,
              shares: 100,
              notional: 1000,
              commissions: 100
          }
        },{
          type: 'clients',
          id: 2,
          attributes: {
              name: 'ABC',
              count: 3,
              shares: 101,
              notional: 1001,
              commissions: 101
          }
        },{
            type: 'clients',
            id: 3,
            attributes: {
                name: 'BCD',
                count: 4,
                shares: 101.5,
                notional: 1001.45,
                commissions: 101.98
          }
        },{
              type: 'clients',
              id: 4,
              attributes: {
                  name: 'EFG',
                  count: 5,
                  shares: 95,
                  notional: 999,
                  commissions: 99.99
              }
        }]
      };
    });

}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
