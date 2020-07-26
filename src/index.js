export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let answer;
    if ((/[^a-z-_0-9]+|\d{4,}|^(\d|_|-)|(\d|_|-)+$/gi.test(this.name)) || (+this.name === 0)) {
      answer = 'Имя не соответствует требованиям';
    } else {
      answer = 'Имя проверено';
    }
    return answer;
  }

  // set change(str) {
  //   this.name = str;
  // }
}
// const validator = new Validator('+');
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = '123'
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = ''
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = 'nameимя'
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = 'Name'
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = 'Имя'
// console.log(validator)
// console.log(validator.validateUsername());

// validator.change = 'nAme'
// console.log(validator)
// console.log(validator.validateUsername());
