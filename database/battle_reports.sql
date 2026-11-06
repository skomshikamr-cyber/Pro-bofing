CREATE TABLE battle_reports (
    id SERIAL PRIMARY KEY,

    attacker_id INT NOT NULL,
    defender_id INT NOT NULL,

    winner_id INT NOT NULL,

    gold_looted INT DEFAULT 0,
    wood_looted INT DEFAULT 0,
    stone_looted INT DEFAULT 0,
    crystal_looted INT DEFAULT 0,

    battle_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_attacker
        FOREIGN KEY (attacker_id)
        REFERENCES players(id),

    CONSTRAINT fk_defender
        FOREIGN KEY (defender_id)
        REFERENCES players(id),

    CONSTRAINT fk_winner
        FOREIGN KEY (winner_id)
        REFERENCES players(id)
);