const dumper = require("./dumper")
const dataType = require("./data-type")

function dump(data) {
  return dataType.check(data);
}

module.exports = dump;
