'use strict';

/**
 * Game.js controller
 *
 * @description: A set of functions called "actions" for managing `Game`.
 */

module.exports = {

  /**
   * Retrieve game records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.game.search(ctx.query);
    } else {
      return strapi.services.game.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a game record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.game.fetch(ctx.params);
  },

  /**
   * Count game records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.game.count(ctx.query, populate);
  },

  /**
   * Create a/an game record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.game.add(ctx.request.body);
  },

  /**
   * Update a/an game record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.game.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an game record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.game.remove(ctx.params);
  }
};
