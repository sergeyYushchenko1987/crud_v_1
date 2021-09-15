const parameters = require('@services/params');
exports.checkParams = (params, subject, action) => {
  let emptyParams = [];
  let check = [];
  Object.keys(params).forEach((key) => {
    if (!params[key] && parameters[subject][action].includes(key)) {
      emptyParams.push(key);
    }
    check.push(key);
  });
  let noParams = [
    ...parameters[subject][action].filter((element) => {
      return !check.includes(element);
    }),
    ...emptyParams,
  ];
  if (noParams.length === 0) {
    return false;
  } else {
    return {
      status: 400,
      description: `Request isn't entire, it doesn't contain - ${noParams}`,
    };
  }
};

exports.formatDate = () => {
  let date = new Date();
  let dd = date.getDate();
  if (dd < 10) {
    dd = '0' + dd;
  }
  let mounth = date.getMonth() + 1;
  if (mounth < 10) {
    mounth = '0' + mounth;
  }
  return `${dd}.${mounth}.${date.getFullYear()}`;
};
