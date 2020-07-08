'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
 * Retrieve records. Example custom controller.
 *
 * @return {Array}
 */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services['ui-component'].search(ctx.query);
    } else {
      entities = await strapi.services['ui-component'].find(ctx.query);
    }
    
    const helper = strapi.services.componenthelper;
    console.log(helper);

    return entities.map(entity => {
      const e = sanitizeEntity(entity, { model: strapi.models['ui-component'] });
      helper.expandVariables(e.contentJson);

      return e;
    });
  },
};