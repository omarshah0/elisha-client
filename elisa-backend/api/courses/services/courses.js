'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

 module.exports = {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    find(params, populate) {
      return strapi.query('courses').find(params, ["cours_sections", "cours_sections.podcasts", "cours_sections.podcasts.Sound"]);
    },
  };
