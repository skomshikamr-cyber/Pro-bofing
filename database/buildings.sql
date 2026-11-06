CREATE TABLE buildings (
    id SERIAL PRIMARY KEY,

    village_id INT NOT NULL,

    building_type VARCHAR(30) NOT NULL,

    level INT DEFAULT 1,

    pos_x INT NOT NULL,
    pos_y INT NOT NULL,

    is_upgrading BOOLEAN DEFAULT FALSE,

    upgrade_finish TIMESTAMP,

    CONSTRAINT fk_village
        FOREIGN KEY (village_id)
        REFERENCES villages(id)
        ON DELETE CASCADE
);