import Validator from './index.js';

test('instance of class', () => {
  const expected = { name: 'name' };
  expect(new Validator('name')).toEqual(expected);
});

test('validateUsername1 ', () => {
  const expected = 'Имя проверено';
  const validator = new Validator('name');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});

test('validateUsername2 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('имя');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});

test('validateUsername3 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('na1234me');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
test('validateUsername4 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('name12');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
test('validateUsername4 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('12name');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
test('validateUsername5 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('_name');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
test('validateUsername6 ', () => {
  const expected = 'Имя не соответствует требованиям';
  const validator = new Validator('name-');
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
