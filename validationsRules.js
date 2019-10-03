const R = require("ramda");

// validations for next documents:
// 1 - паспорт +
// 2 - военный билет - валидация как в паспорте
// 3 - иностранный документ
// 4 - заграничный паспорт  - валидация как в паспорте
// 5 - паспорт моряка - валидация как в паспорте
// 6 - свидетельство о рождении +
// 7 - паспорт формы СССР - валидация как в свид о рождении

//helpers
const removeSpaces = string => string.replace(/\s/gm, "");

const capitalize = string => string.toUpperCase();

const logging = value => console.log(value);

//UKR

// паспорт укр
// Format - НС 123456
const validateUkrPassport = value => /^[a-zA-ZА-Яа-я]{2}[0-9]{6}$/i.test(value);

// паспорт укр био
// Format - 123456789
const validateUkrBioPassport = value => /^[[0-9]{9}$/i.test(value);

// свидетельство о рождении
// Format - I-БК 123456
//IMPORTANT!!!!
//first letter is roman number - mean letter of english alphabet
const validateBithSertificate = value =>
  /^M{0,3}(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])(-)[a-zA-ZА-Яа-я]{2}[0-9]{6}$/i.test(
    value
  );

const passportUkrTrue = " н с 7 7 3 2 9 6 ";
const passportUkrFalse = " ф с 7 а 3 2 9 6 ";
const passportUkrBioTrue = " 1 2 3 7 7 3 2 9 6 ";
const passportUkrBioFalse = " ф с в 7 6 3 2 9 6 ";
const bithdayCertificateTrue = " I-БК 123456 ";
const bithdayCertificate2True = " x-БК 123456 ";

//RUS

//паспорт россии
// Format - 12 12 123456 (10 цифр)
const validateRusPassport = value => /^[[0-9]{10}$/i.test(value);
const passportRusTrue = " 12 12 123456";
const passportRusFalse = " 12 1c 123456";

//паспорт загран россии
// Format - 12 12 12345 (9 цифр)

const validateRusForeignPassport = value => /^[[0-9]{9}$/i.test(value);

//паспорт моряка россии
// Format - ФФ 1234567 (9 цифр)
const validateRusSailorPassport = value =>
  /^[a-zA-ZА-Яа-я]{2}[0-9]{7}$/i.test(value);

console.log(passportUkrTrue);
R.compose(
  logging,
  validateUkrPassport,
  capitalize,
  removeSpaces
)(passportUkrTrue); //true for passportUkrTrue

console.log(passportUkrFalse);
R.compose(
  logging,
  validateUkrPassport,
  capitalize,
  removeSpaces
)(passportUkrFalse); //false for passportUkrFalse

console.log(passportUkrBioTrue);
R.compose(
  logging,
  validateUkrBioPassport,
  capitalize,
  removeSpaces
)(passportUkrBioTrue); //true for passportUkrBioTrue

console.log(passportUkrBioFalse);
R.compose(
  logging,
  validateUkrBioPassport,
  capitalize,
  removeSpaces
)(passportUkrBioFalse); //false for validateUkrBioPassport

console.log(bithdayCertificateTrue);
R.compose(
  logging,
  validateBithSertificate,
  capitalize,
  removeSpaces
)(bithdayCertificateTrue); //true

console.log(bithdayCertificate2True);
R.compose(
  logging,
  validateBithSertificate,
  capitalize,
  removeSpaces
)(bithdayCertificate2True); //true

console.log(passportRusTrue);
R.compose(
  logging,
  validateRusPassport,
  capitalize,
  removeSpaces
)(passportRusTrue); //true

console.log(passportRusFalse);
R.compose(
  logging,
  validateRusPassport,
  capitalize,
  removeSpaces
)(passportRusFalse); //false
