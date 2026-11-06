const assert = require("node:assert/strict");
const controller = require("../services/leviathanMovementController");
const config = {
    id: "leviathan",
    canWalkOnGround: true,
    canWalkOnWater: true,
    ignoreWalls: true,
    ignoreTraps: true,
    movement: {
        modes: ["water", "land", "obstacle"],
        waterSpeed: 18,
        landSpeed: 12,
        obstacleSpeed: 8,
        canCrossWater: true,
        canCrossLand: true,
        canCrossObstacles: true
    }
};
const creature = {
    id: "leviathan",
    state: "alive",
    health: 25000,
    position: { x: 0, y: 0 },
    pathIndex: 0
};
const terrainMap = [];
for (let x = 0; x <= 4; x++) {
    terrainMap.push({
        x,
        y: 0,
        type: x === 2 ? "water" : "land"
    });
}
terrainMap.push({
    x: 3,
    y: 1,
    type: "obstacle"
});
assert.equal(
    controller.canTraverseTerrain("land", config),
    true
);
assert.equal(
    controller.canTraverseTerrain("water", config),
    true
);
assert.equal(
    controller.canTraverseTerrain("obstacle", config),
    true
);
assert.equal(
    controller.getMovementSpeed("land", config),
    12
);
assert.equal(
    controller.getMovementSpeed("water", config),
    18
);
assert.equal(
    controller.getMovementSpeed("obstacle", config),
    8
);
const pathResult = controller.findPath(
    creature,
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    terrainMap,
    config
);
assert.equal(pathResult.success, true);
assert.equal(pathResult.path.length, 5);
const movementResult = controller.moveAlongPath(
    creature,
    pathResult.path,
    0.1,
    config
);
assert.equal(movementResult.success, true);
assert.equal(movementResult.moved, true);
const deadCreature = {
    id: "leviathan",
    state: "dead",
    health: 0,
    position: { x: 0, y: 0 }
};
const deadMovementResult = controller.moveAlongPath(
    deadCreature,
    pathResult.path,
    0.1,
    config
);
assert.equal(deadMovementResult.success, false);
console.log("All Leviathan movement tests passed.");