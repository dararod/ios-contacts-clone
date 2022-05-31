import fastify from 'fastify';

import knexPlugin from './plugins/knex.js';

const server = fastify({ logger: true });

server.register(knexPlugin);

server.get('/', (request, reply) => {
  // Returns all contacts from the database
  // SQL: SELECT * FROM contacts
  return reply.status(500).send({
    message: 'Not implemented',
  });
});

server.get('/:id', async (request, reply) => {
  const results = await server.knex('contacts').where({
    id: request.params.id,
  });

  if (results.length) {
    return reply.status(200).send(results[0]);
  }

  return reply.status(400).send({
    message: `A contact with ID: ${request.params.id} doesn't exist`,
  });
});

server.post('/', async (request, reply) => {
  const body = request.body;

  await server.knex('contacts').insert({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    country: body.country,
    phone: body.phone,
    birthdate: body.birthdate,
    city: body.city,
    zipcode: body.zipcode,
    state: body.state,
  });

  // 1. This is not recommended in real world projects given that multithread
  // operations against the same instance may lead to unexpected results.
  //
  // 2. Keep in mind that LAST_INSERT_ROWID is connection specific.
  const [row] = await server.knex.select(server.knex.raw('LAST_INSERT_ROWID() as id'));

  return reply.status(201).send({ id: row.id });
});

server.put('/:id', (request, reply) => {
  // Replaces a contact's data in the database with the contents of the
  // request body
  return reply.status(500).send({
    message: 'Not implemented',
  });
});

server.delete('/:id', (request, reply) => {
  // Deletes the contact with the provided ID
  return reply.status(500).send({
    message: 'Not implemented',
  });
});

const start = async () => {
  try {
    await server.listen(8000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
