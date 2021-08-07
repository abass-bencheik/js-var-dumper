function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function template(type, value, length = null) {
  if (length === null) {
    return "<div style='font-family:monospace, generic-family; border:1px solid rgba(0,0,0,0.1); background:#0000000e; border-radius:3px;'>" + "<span style='color:#00ff0f'>Type</span>" + " <span style='color:#1e00ff'>=></span>" + " <span style='color:#df02e4'>" + type + "</span>" + " <br />" + "<span style='color:#00ff0f'>Value</span>" + " <span style='color:#1e00ff'>=></span>" + " <span style='color:#df02e4'>" + value + "</span>" + " <br />" + "</div>";
  }

  return "<div style='font-family:monospace, generic-family; border:1px solid rgba(0,0,0,0.1); background:#0000000e; border-radius:3px;'>" + "<span style='color:#00ff0f'>Type</span>" + " <span style='color:#1e00ff'>=></span>" + " <span style='color:#df02e4'>" + type + "</span>" + " <br />" + "<span style='color:#00ff0f'>Length</span>" + " <span style='color:#1e00ff'>=></span>" + " <span style='color:#df02e4'>" + length + "</span>" + " <br />" + "<span style='color:#00ff0f'>Value</span>" + " <span style='color:#1e00ff'>=></span>" + " <span style='color:#df02e4'>" + value + "</span>" + " <br />" + "</div>";
}

function stringType(data) {
  return template("string", data, data.length);
}

function intType(data) {
  return template("integer", data, null);
}

function intObject(data) {
  return template("object", data, data.length);
}

function check(data) {
  let dataType = typeof data;

  switch (dataType) {
    case 'string':
      return stringType(data);
      break;

    case 'number':
      return intType(data);
      break;

    case 'object':
      return intObject(data);
      break;

    default:
      return "Sorry, <span style='color:#fe5359'>js-var-dumper</span> don't support this type of data yet 🤒";
  }
}

class dumper {
  constructor() {
    _defineProperty(this, "i", void 0);

    this.locale = "EN";
  }

  setLocale(locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

}

function dump(data) {
  return check(data);
}