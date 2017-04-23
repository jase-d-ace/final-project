DROP TABLE IF EXISTS pokemon CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
                  id SERIAL PRIMARY KEY NOT NULL,
                  username VARCHAR NOT NULL UNIQUE,
                  password_digest VARCHAR NOT NULL
                  );

CREATE TABLE pokemon(
                    id SERIAL PRIMARY KEY NOT NULL,
                    name VARCHAR NOT NULL,
                    sprite VARCHAR NOT NULL,
                    trainer_id INTEGER references users(id)
                    );
