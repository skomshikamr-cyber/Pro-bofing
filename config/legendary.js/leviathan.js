module.exports = {

    id: "leviathan",

    name: "Leviathan",
    
    targetPriority: [
    "hero",
    "building",
    "troop"
],

    rarity: "Legendary",

    unlocked: false,

    laboratoryLevel: 15,

    buildTime: 86400,

    housingSpace: 100,

    health: 25000,

    damage: 1200,

    attackSpeed: 2.5,

    moveSpeed: 12,

    attackRange: 10,

    targetType: "Any",

    attackType: "Splash",

    preferredTarget: "Defenses",
    
    evolution: {

    currentPath: null,
    
    unlockRequirements: {

    requiredTownHall: 12,

    requiredWins: 50,

    requiredCreaturesDefeated: 0

},

    unlockedPaths: [],

    choices: {

        abyss: {

            id: "abyss",

            name: "Abyss Lord"

        },

        storm: {

            id: "storm",

            name: "Storm Emperor"

        },

        ancient: {

            id: "ancient",

            name: "Ancient Titan"

        }

    }

},
    
    bond: {

    level: 1,

    experience: 0,

    maxLevel: 20,

    loyalty: 100,

    reviveTime: 172800

},
    
    spawnSequence: {

    duration: 6,

    warningTime: 2,

    impactRadius: 8,

    impactDamage: 1800,

    shockwaveRadius: 12,

    screenShake: true,

    cinematicCamera: true

},

    specialAbility: {

    name: "Tidal Wrath",

    cooldown: 20,

    range: 18,

    waveSpeed: 30,

    waveWidth: 6,

    damage: 2500,

    pushForce: 8,

    destroyProjectiles: true,

    floodDuration: 12

}
    
    canWalkOnGround: true,

canWalkOnWater: true,

ignoreWalls: true,

ignoreTraps: true,

crushBuildings: true,

crushRadius: 2,

knockbackResistance: 100,

immuneToSlow: true,

immuneToStun: true

};
movement: {

    modes: [
        "water",
        "land",
        "obstacle"
    ],

    waterSpeed: 18,

    landSpeed: 12,

    obstacleSpeed: 8,

    canCrossWater: true,

    canCrossLand: true,

    canCrossObstacles: true

}
attackSpeed: {
    windUp: 1000,
    recovery: 500,
    cooldown: 3000
},