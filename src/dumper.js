class dumper {

  constructor () {
    this.locale = "EN"
  }

  setLocale(locale) {
    this.locale = locale
  }

  getLocale() {
    return this.locale
  }
}

module.exports = new dumper()