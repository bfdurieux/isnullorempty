import {isNullOrEmpty} from "./isNullOrEmpty";

// const isNullOrEmpty = require("./isNullOrEmpty");

describe('isNullOrEmpty', () => {
  it('should check null and undefined', () => {
    expect(isNullOrEmpty.isNullOrEmpty(null)).toEqual(true);
    expect(isNullOrEmpty.isNullOrEmpty(undefined)).toEqual(true);
  });

  it('should check empty strings', () => {
    expect(isNullOrEmpty.isNullOrEmpty('')).toEqual(true);
    expect(isNullOrEmpty.isNullOrEmpty('     ')).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty('n')).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty('    n')).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty('n    ')).toEqual(false);
  });

  it('should check NaN', () => {
    expect(isNullOrEmpty.isNullOrEmpty(NaN)).toEqual(true);
  });

  it('should check not null values', () => {
    expect(isNullOrEmpty.isNullOrEmpty('short')).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty('5')).toEqual(false)
    expect(isNullOrEmpty.isNullOrEmpty('5.55')).toEqual(false)
    expect(isNullOrEmpty.isNullOrEmpty(Number.MAX_SAFE_INTEGER)).toEqual(false)
    expect(isNullOrEmpty.isNullOrEmpty(Number.MIN_VALUE)).toEqual(false)
    expect(isNullOrEmpty.isNullOrEmpty(0)).toEqual(false)
  });

  it('should check empty array', () => {
    expect(isNullOrEmpty.isNullOrEmpty([])).toEqual(true);
    expect(isNullOrEmpty.isNullOrEmpty([{test: 'test'}])).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty(['test'])).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty([1, 2, 3])).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty([0])).toEqual(false);
  });

  it('should check boolean', () => {
    expect(isNullOrEmpty.isNullOrEmpty(true)).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty(false)).toEqual(false);
  });

  it('should check object', () => {
    expect(isNullOrEmpty.isNullOrEmpty({id: null, name: null, age: null})).toEqual(true);
    expect(isNullOrEmpty.isNullOrEmpty({id: '', name: '', age: ''})).toEqual(true);
    expect(isNullOrEmpty.isNullOrEmpty({id: 1, name: 'Joe', age: 30})).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty({id: 1, name: '', age: 30})).toEqual(false);
  });

  it('should check object array', () => {
    expect(isNullOrEmpty.isNullOrEmpty([{test: 'test'}])).toEqual(false);
    expect(isNullOrEmpty.isNullOrEmpty([{test: ''}])).toEqual(true);
  });
})