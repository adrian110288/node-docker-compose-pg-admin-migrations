/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(40)
        )
    `);

};

exports.down = pgm => pgm.sql('DROP TABLE users;');
