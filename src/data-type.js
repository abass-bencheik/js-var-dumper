const config = require("./config");

function stringType(data){
  return config.template("string", data, data.length);
}

function intType(data){
  return config.template("integer", data, null)
}

function intObject(data){
  return config.template("object", data, data.length)
}

function check(data){
  dataType = typeof data;
  switch (dataType) {
    case 'string':
       return  stringType(data)
      break;
    case 'number':
       return  intType(data)
      break;
    case 'object':
       return  intObject(data)
      break;
    
    default:
     return "Sorry, <span style='color:#fe5359'>js-var-dumper</span> don't support this type of data yet 🤒"
  }
}

module.exports = {
  check,
  stringType,
  intType,
}