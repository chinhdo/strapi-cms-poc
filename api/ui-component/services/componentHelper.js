'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

let obj = {
  /** * Expand variables
  *  Variables: %BRAND% - Brand name. Values: ABC, ABCBS, EBCBS, etc.
  */
  expandVariables: function (obj, stack) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {
          this.expandVariables(obj[property], stack + '.' + property);
        } else {
          // TODO: Get current brand
          obj[property] = obj[property].replace('%BRAND%', 'Anthem BCBS');
        }
      }
    }
  }
};

module.exports = obj;

