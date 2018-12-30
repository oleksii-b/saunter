class Util {
  getQueryString(param, value) {
    const queryString = location.search,
      regExp = new RegExp(`(${param}=)[^&]*`, 'gi');

    return queryString.replace(regExp, `${param}=${value}`);
  }
}

const util = new Util();

export default util;
