'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
 * Triggered before creation.
 */
  lifecycles: {
    async beforeCreate(data) {
      console.log('Component created', data);
    },
    async afterUpdate(data) {
      console.log('Component updated', data);
    }
  },
};
