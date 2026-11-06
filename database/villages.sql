CREATE TABLE villages (
    id SERIAL PRIMARY KEY,

    player_id INT NOT NULL,

    name VARCHAR(50) NOT NULL,

    world_x INT NOT NULL,
    world_y INT NOT NULL,

    townhall_level INT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_player
        FOREIGN KEY (player_id)
        REFERENCES players(id)
        ON DELETE CASCADE
);