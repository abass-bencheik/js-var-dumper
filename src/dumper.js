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

export default new dumper()