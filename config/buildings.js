const buildings = {

    townHall: {
        id: "townHall",
        name: "Town Hall",
        maxLevel: 20,
        size: { width: 4, height: 4 },
        baseHitPoints: 3000,
        hitPointIncrease: 400,
        buildCost: {
            gold: 0,
            wood: 0,
            stone: 0,
            crystal: 0
        },
        buildTime: 0
    },

    barracks: {
        id: "barracks",
        name: "Barracks",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 1600,
        hitPointIncrease: 180,
        buildCost: {
            gold: 500,
            wood: 400,
            stone: 200,
            crystal: 0
        },
        buildTime: 120
    },

    laboratory: {
        id: "laboratory",
        name: "Laboratory",
        maxLevel: 15,
        size: { width: 4, height: 4 },
        baseHitPoints: 1800,
        hitPointIncrease: 250,
        baseQueue: 1,
        baseSpellCapacity: 2,
        buildCost: {
            gold: 800,
            wood: 600,
            stone: 400,
            crystal: 200
        },
        buildTime: 180
    },

    warehouse: {
        id: "warehouse",
        name: "Warehouse",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 1700,
        hitPointIncrease: 180,
        buildCost: {
            gold: 450,
            wood: 500,
            stone: 300,
            crystal: 0
        },
        buildTime: 90
    },

    goldMine: {
        id: "goldMine",
        name: "Gold Mine",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 900,
        hitPointIncrease: 100,
        buildCost: {
            gold: 200,
            wood: 150,
            stone: 100,
            crystal: 0
        },
        buildTime: 60
    },

    lumberMill: {
        id: "lumberMill",
        name: "Lumber Mill",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 900,
        hitPointIncrease: 100,
        buildCost: {
            gold: 200,
            wood: 150,
            stone: 100,
            crystal: 0
        },
        buildTime: 60
    },

    stoneQuarry: {
        id: "stoneQuarry",
        name: "Stone Quarry",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 950,
        hitPointIncrease: 110,
        buildCost: {
            gold: 250,
            wood: 200,
            stone: 150,
            crystal: 0
        },
        buildTime: 75
    },

    crystalMine: {
        id: "crystalMine",
        name: "Crystal Mine",
        maxLevel: 15,
        size: { width: 3, height: 3 },
        baseHitPoints: 1000,
        hitPointIncrease: 120,
        buildCost: {
            gold: 300,
            wood: 250,
            stone: 200,
            crystal: 50
        },
        buildTime: 90
    }

};

module.exports = buildings;