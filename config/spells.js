const spells = {

    rage: {
        name: "Rage",
        laboratoryLevel: 1,
        buildTime: 180,
        storageSpace: 1,
        cost: {
            gold: 0,
            wood: 0,
            stone: 0,
            crystal: 120
        }
    },

    speed: {
        name: "Speed",
        laboratoryLevel: 3,
        buildTime: 240,
        storageSpace: 1,
        cost: {
            gold: 0,
            wood: 0,
            stone: 0,
            crystal: 180
        }
    },

    clone: {
        name: "Clone",
        laboratoryLevel: 5,
        buildTime: 360,
        storageSpace: 1,
        cost: {
            gold: 0,
            wood: 0,
            stone: 80,
            crystal: 350
        }
    },

    heal: {
        name: "Heal",
        laboratoryLevel: 7,
        buildTime: 300,
        storageSpace: 1,
        cost: {
            gold: 0,
            wood: 0,
            stone: 120,
            crystal: 260
        }
    },

    power: {
        name: "Power",
        laboratoryLevel: 9,
        buildTime: 420,
        storageSpace: 1,
        cost: {
            gold: 0,
            wood: 120,
            stone: 180,
            crystal: 420
        }
    }

};

module.exports = spells;