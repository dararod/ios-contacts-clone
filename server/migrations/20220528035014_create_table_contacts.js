/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('contacts', function (table) {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255);
    table.string('email', 255);
    table.string('country', 255);
    table.string('phone', 255);
    table.datetime('birthdate');
    table.string('city', 255);
    table.string('zipcode', 255);
    table.string('state', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema
      .dropTable('contacts');
};

export const config = { transaction: false };
