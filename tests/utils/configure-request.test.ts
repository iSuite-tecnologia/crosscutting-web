import { configureRequest } from '../../src/utils/configure-request';

describe('configureRequest', () => {
  let params = {
    page: 1,
    take: 10,
    orderProperty: 'name',
    orderDesc: 'asc',
    name: null
  };

  it('configure the request with a new object', () => {
    expect(configureRequest('users', params)).toBe(
      'users?page=1&take=10&orderProperty=name&orderDesc=asc'
    );
  });

  it('returns only the api url without the parameters', () => {
    expect(configureRequest('users', null)).toBe('users');
  });
});
