CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,

    level INT DEFAULT 1,
    xp INT DEFAULT 0,
    trophies INT DEFAULT 0,

    gold INT DEFAULT 1000,
    wood INT DEFAULT 1000,
    stone INT DEFAULT 1000,
    crystal INT DEFAULT 100,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);