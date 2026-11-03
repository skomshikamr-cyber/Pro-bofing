module.exports = {

    id: "behemoth",

    name: "Behemoth",

    rarity: "Legendary",

    unlocked: false,

    laboratoryLevel: 15,
    
    death: {

    enabled: true,

    explosionRadius: 8,

    damage: 5000,

    knockbackForce: 14,

    stunDuration: 4,

    wallDamageMultiplier: 4,

    terrainImpact: true,

    terrainImpactRadius: 6,

    reviveTime: 172800,

    stateAfterDeath: "dormant"

},
    
    rage: {

    enabled: true,

    activationHealthPercent: 35,

    damageMultiplier: 1.5,

    attackSpeedMultiplier: 0.8,

    moveSpeedMultiplier: 1.25,

    heavyStepIntervalMultiplier: 0.6,

    knockbackResistance: 100,

    stunResistance: 75,

    duration: 20,

    visualState: "enraged"

},
    
    heavyStep: {

    enabled: true,

    interval: 4,

    radius: 3,

    damage: 700,

    knockbackForce: 6,

    slow: {

        enabled: true,

        amount: 35,

        duration: 4

    },

    buildingDamage: 300,

    wallDamage: 1200,

    terrainImpact: true

},

    buildTime: 86400,
    
    unlockRequirements: {

    requiredTownHall: 13,

    requiredWins: 75,

    requiredCreaturesDefeated: 1

},

    housingSpace: 100,

    health: 40000,

    damage: 2200,

    attackSpeed: 3.5,
    
    movement: {

    type: "ground",

    canWalkOnGround: true,

    canWalkOnWater: false,

    canCrossWalls: true,

    canCrossTraps: true,

    obstacleBehavior: "crush",

    wallBreakRadius: 2,

    buildingCrushRadius: 3,

    terrainImpact: true,

    terrainImpactRadius: 2,

    terrainImpactCooldown: 4,

    movementSlowResistance: 90,

    knockbackResistance: 100

},

    moveSpeed: 7,

    attackRange: 3,

    targetType: "Buildings",

    attackType: "SingleTarget",

    preferredTarget: "Defenses",

    canWalkOnGround: true,

    canWalkOnWater: false,

    ignoreWalls: true,

    ignoreTraps: true,

    crushBuildings: true,

    crushRadius: 3,

    knockbackResistance: 100,

    specialAbility: {

    id: "earthbreaker",

    name: "Earthbreaker",

    cooldown: 25,

    chargeTime: 2,

    damage: 4000,

    radius: 6,

    stunDuration: 3,

    wallDamageMultiplier: 3,

    knockbackForce: 10,

    terrainCrackDuration: 10,

    destroyProjectiles: false

}