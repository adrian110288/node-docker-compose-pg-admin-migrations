/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`
        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            content VARCHAR(255),
            user_id INTEGER REFERENCES users(id)
        )
    `);

};

exports.down = pgm => pgm.sql('DROP TABLE posts;');
