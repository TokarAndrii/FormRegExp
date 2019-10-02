const R = require("ramda");
// validations for next documents:
// 1 - паспорт
// 2 - военный билет
// 3 - иностранный документ
// 4 - заграничный паспорт,
// 5 - паспорт моряка,
// 6 - свидетельство о рождении
// 7 - паспорт формы СССР

//helpers
const removeSpaces = string => string.replace(/\s/gm, "");
const logging = value => console.log(value);

const validateUkrPassport = value => /^[a-zA-ZА-Яа-я]{2}[0-9]{6}$/i.test(value);

const validateUkrBioPassport = value => /^[[0-9]{9}$/i.test(value);

const validateBithSertificate = value =>
  /^[MDCLXVI]{1}-[a-zA-ZА-Яа-я]{2}[0-9]{6}$/i.test(value);

//ukr
//1 - паспорт
//type - xx yyyyyy
//x - letter y - number

const passportUkrTrue = " н с 7 7 3 2 9 6 ";
const passportUkrFalse = " ф с 7 а 3 2 9 6 ";
const passportUkrBioTrue = " 1 2 3 7 7 3 2 9 6 ";
const passportUkrBioFalse = " ф с в 7 6 3 2 9 6 ";

//true for passportUkrTrue
// R.compose(
//   logging,
//   validateUkrPassport,
//   removeSpaces
// )(passportUkrTrue);

//false for passportUkrFalse
// R.compose(
//   logging,
//   validateUkrPassport,
//   removeSpaces
// )(passportUkrFalse);

//true for passportUkrBioTrue
// R.compose(
//   logging,
//   validateUkrBioPassport,
//   removeSpaces
// )(passportUkrBioTrue);

//false for validateUkrBioPassport
// R.compose(
//   logging,
//   validateUkrBioPassport,
//   removeSpaces
// )(passportUkrBioFalse);

//Validation ukr foreign passport (bio and usual) the same as national passport

R.compose(
  logging,
  validateBithSertificate,
  removeSpaces
)("I-БК 123456"); //true
