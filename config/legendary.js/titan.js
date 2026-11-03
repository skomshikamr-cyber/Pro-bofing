module.exports = {

    id: "titan",

    name: "Titan",

    rarity: "Legendary",

    unlocked: false,

    laboratoryLevel: 15,

    buildTime: 86400,

    housingSpace: 120,

    health: 50000,

    damage: 2800,

    attackSpeed: 3,

    moveSpeed: 9,

    attackRange: 4,

    targetType: "Any",

    attackType: "Melee",

    preferredTarget: "Strongest",

    movement: {

        type: "ground",

        canWalkOnGround: true,

        canWalkOnWater: false,

        canCrossWalls: true,

        canCrossTraps: true,

        ignoresTerrain: false,

        obstacleBehavior: "destroy",

        wallBreakRadius: 3,

        terrainImpact: true,

        knockbackResistance: 100,

        stunResistance: 80

    },

    abilities: {

        titanStrike: {

            id: "titanStrike",

            name: "Titan Strike",

            cooldown: 16,

            chargeTime: 1.5,

            damage: 6000,

            radius: 5,

            knockbackForce: 12,

            stunDuration: 3,

            wallDamageMultiplier: 4

        },

        shockwave: {

            id: "shockwave",

            name: "Titan Shockwave",

            cooldown: 28,

            damage: 2200,

            radius: 10,

            knockbackForce: 15,

            stunDuration: 2

        }

    },

    rage: module.exports = {

    id: "phoenix",

    name: "Phoenix",

    rarity: "Legendary",

    unlocked: false,

    laboratoryLevel: 15,

    buildTime: 86400,

    housingSpace: 80,

    health: 18000,

    damage: 1600,

    attackSpeed: 1.8,

    moveSpeed: 22,

    attackRange: 14,

    targetType: "Any",

    attackType: "Ranged",

    preferredTarget: "Defenses",

    movement: {

        type: "flying",

        canFly: true,

        canWalkOnGround: false,

        ignoresWalls: true,

        ignoresTerrain: true,

        ignoresTraps: true

    
},

specialAbility: {

    id: "solarDive",

    name: "Solar Dive",

    cooldown: 18,

    chargeTime: 1.5,

    flightHeight: 20,

    diveSpeed: 35,

    impactRadius: 5,

    damage: 3200,

    burnDuration: 6,

    burnDamagePerSecond: 450,

    knockbackForce: 5,

    destroyProjectiles: true,

    terrainImpact: true

},

flameTrail: {

    enabled: true,

    interval: 1.5,

    radius: 2,

    duration: 5,

    damagePerSecond: 180,

    buildingDamagePerSecond: 120,

    enemySlowPercent: 25,

    slowDuration: 2,

    maxActiveZones: 8

},

    rebirth: {

    enabled: true,

    triggerHealthPercent: 0,

    ashDuration: 4,

    reviveHealthPercent: 40,

    reviveDelay: 4,

    reviveRadius: 5,

    reviveDamage: 2500,

    reviveKnockbackForce: 8,

    burnDuration: 8,

    burnDamagePerSecond: 300,

    canRebirthOncePerBattle: true,

    reviveCooldown: 17242
    {

        