CREATE TABLE troops (
    id SERIAL PRIMARY KEY,

    village_id INT NOT NULL,

    troop_type VARCHAR(30) NOT NULL,

    quantity INT DEFAULT 0,

    level INT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_village
        FOREIGN KEY (village_id)
        REFERENCES villages(id)
        ON DELETE CASCADE
);