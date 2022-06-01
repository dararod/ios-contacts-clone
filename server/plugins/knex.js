import fastifyPlugin from 'fastify-plugin';
import Knex from 'knex';
import knexStringcase from 'knex-stringcase';

import knexfile from '../knexfile.js';

function knexPlugin(fastify, _opts, done) {
  const knex = Knex(knexStringcase(knexfile));

  fastify.decorate('knex', knex);
  done();
}

export default fastifyPlugin(knexPlugin, {
  name: 'knex',
});
