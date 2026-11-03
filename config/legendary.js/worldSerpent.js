module.exports = {

    id: "worldSerpent",

    name: "World Serpent",

    rarity: "Legendary",

    unlocked: false,

    laboratoryLevel: 15,

    buildTime: 86400,

    housingSpace: 100,

    health: 35000,

    damage: 2400,

    attackSpeed: 2.8,

    moveSpeed: 14,

    attackRange: 5,

    targetType: "Any",

    attackType: "Melee",

    preferredTarget: "Defenses",

    movement: {

        type: "burrowing",

        canWalkOnGround: true,

        canWalkOnWater: true,

        canBurrow: true,

        ignoresWalls: true,

        ignoresTraps: true,

        ignoresTerrain: true,

        undergroundSpeedMultiplier: 1.5,

        knockbackResistance: 100,

        stunResistance: 70

    },

    abilities: {

        earthBreach: {

            id: "earthBreach",

            name: "Earth Breach",

            cooldown: 15,

            damage: 5000,

            radius: 6,

            knockbackForce: 10,

            stunDuration: 3

        },

        venomWave: {

            id: "venomWave",

            name: "Venom Wave",

            cooldown: 24,

            damage: 1800,

            radius: 8,

            poisonDuration: 8,

            poisonDamagePerSecond: 350

        }

    },

    underground: {

        enabled: true,

        burrowDuration: 6,

        emergeDelay: 1.5,

        damageReduction: 60,

        cannotAttackWhileBurrowing: true,

        hiddenFromDefenses: true

    },

    rage: {

        enabled: true,

        activationHealthPercent: 30,

        damageMultiplier: 1.5,

        attackSpeedMultiplier: 0.8,

        moveSpeedMultiplier: 1.25,

        duration: 20,

        knockbackResistance: 100,

        stunResistance: 100,

        visualState: "enraged"

    },

    death: {

        enabled: true,

        explosionRadius: 9,

        damage: 6000,

        knockbackForce: 16,

        stunDuration: 4,

        terrainImpact: true,

        terrainImpactRadius: 7,

        reviveTime: 259200,

        stateAfterDeath: "dormant"

    }

};