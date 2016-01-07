/**
 * storage 
 * in order to saving data
 * @author 3w
 */
(function() {
  "use strict";
  
  function storage() {
    var localStorage = window.localStorage;

    function set(key, value) {
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    }

    function get(key) {
      var value = localStorage.getItem(key) || "";

      try {
        return JSON.parse(value);
      } catch(e) {
        return value;
      }
    }

    function remove(key) {
      localStorage.removeItem(key);
    }

    return {
      set: set,
      get: get,
      remove: remove
    }
  }

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function () {
      return storage;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = storage;
  } else {
    window.storage = storage;
  }
}());