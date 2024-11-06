import { objectWithoutProperties } from '../../src/utils/remove-object-properties';

describe('objectWithoutProperties', () => {
  const params = {
    page: 1,
    take: 10,
    orderProperty: 'name',
    orderDesc: 'asc',
    id: 'd82f449b-fd64-40fe-aee9-9724e59b8e61'
  };

  it('should return a new object without the id', () => {
    const newParams = objectWithoutProperties(params, ['id']);

    expect(newParams).not.toHaveProperty('params.id');
  });

  it('passing as a parameter a property that does not exist in the object', () => {
    const newParams = objectWithoutProperties(params, ['userId']);

    expect(newParams).not.toHaveProperty('params.userId');
  });

  it('should not display an error when passing a non-existent property', () => {
    const obj = {
      page: 1,
      orderProperty: 'name',
      orderDesc: 'asc'
    };

    const returnMethod = { page: 1, orderProperty: 'name', orderDesc: 'asc' };

    expect(objectWithoutProperties(obj, ['take'])).toEqual(returnMethod);
  });
});
