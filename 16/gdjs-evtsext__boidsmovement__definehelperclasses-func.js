
if (typeof gdjs.evtsExt__BoidsMovement__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__BoidsMovement__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BoidsMovement__DefineHelperClasses = {};


gdjs.evtsExt__BoidsMovement__DefineHelperClasses.userFunc0x24ee2e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__boidsExtension) {
  return;
}

/**
 * A vector
 */
class Vector {
  /** @type {number} */
  x;
  /** @type {number} */
  y;

  /**
   * Create a vector.
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {Vector} this object
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Adds a velocity to this vector
   * @param {Vector} referenceVector gets the velocity to be added
   * @returns {Vector} this object
   */
  add(referenceVector) {
    this.x += referenceVector.x;
    this.y += referenceVector.y;

    return this;
  }

  /**
   * Normalize the vector
   * @returns {Vector}
   */
  normalize() {
    const len = this.magnitude();
    if (len !== 0) this.multiply(1 / len);
    return this;
  }

  /**
   * Multiply vectors verticies
   * @param {float} amount
   * @returns {Vector}
   */
  multiply(amount) {
    this.x *= amount;
    this.y *= amount;
    return this;
  }

  /**
   * Divide vectors verticies
   * @param {float} amount
   * @returns {Vector}
   */
  divide(amount) {
    this.x /= amount;
    this.y /= amount;

    return this;
  }

  /**
   * Subtracts vectors verticies from a reference vector
   * @param {Vector} referenceVector
   * @returns {Vector}
   */
  subtract(referenceVector) {
    this.x -= referenceVector.x;
    this.y -= referenceVector.y;

    return this;
  }

  /**
   * Limits Vectors speed
   * @param {number} max
   * @returns {Vector}
   */
  limit(max) {
    const mSq = this.magnitudeSquare();
    if (mSq > max * max) {
      this.divide(Math.sqrt(mSq)).multiply(max);
    }
    return this;
  }

  /**
   * Calculate the vectors direction
   * @returns {float}
   */
  heading() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Calculate the vectors magnitude squared
   * @returns {float}
   */
  magnitudeSquare() {
    const x = this.x;
    const y = this.y;
    return x * x + y * y;
  };

  /**
   * Calculate the vectors magnitude
   * @returns {float}
   */
  magnitude() {
    return Math.sqrt(this.magnitudeSquare());
  }
}

/**
 * A boid agent
 * Methods for Separation, Cohesion, Alignment added
 * Inspired from The Nature of Code - Daniel Shiffman
 * http://natureofcode.com
 * 
 * Original source code:
 * https://github.com/nature-of-code/noc-examples-processing/blob/master/chp06_agents/NOC_6_09_Flocking/Boid.pde
 */
class Boid {
  /** @type {gdjs.BehaviorRBushAABB} */
  currentRBushAABB = null;
  acceleration = new Vector(0, 0);
  velocity = new Vector(gdjs.randomFloatInRange(-1, 1), gdjs.randomFloatInRange(-1, 1));
  separationDirection = new Vector(0, 0);
  alignmentDirection = new Vector(0, 0);
  cohesionDirection = new Vector(0, 0);
  customIntentsDirectionSum = new Vector(0, 0);
  separateWorkingVector = new Vector(0, 0);

  /**
   * Create a boid agent.
   * @param {gdjs.RuntimeBehavior} behavior
   */
  constructor(behavior) {
    /** @type {gdjs.RuntimeBehavior} */
    this.behavior = behavior;
  }

  /**
   * Add a custom intent.
   * @param {Boid} boid
   * @param {number} directionX
   * @param {number} directionY
   * @param {number} weight
   */
  addIntent(directionX, directionY, weight) {

    if (directionX === 0 && directionY === 0) {
      return;
    }

    const length = Math.hypot(directionX, directionY);
    const unitX = directionX / length;
    const unitY = directionY / length;

    this.customIntentsDirectionSum.x += unitX * weight;
    this.customIntentsDirectionSum.y += unitY * weight;
  }

  /**
   * Vector between 2 boids.
   * @param {Boid} boid
   * @param {Vector} vector the vector to return the result
   * @returns {Vector} vector
   */
  getVectorTo(boid, vector) {
    const object = this.behavior.owner;
    const otherObject = boid.behavior.owner;
    let x = otherObject.x - object.x;
    let y = otherObject.y - object.y;
    vector.set(x, y);
    return vector;
  }

  /**
   * Applys the three rules of boids
   */
  flock() {
    const separationDirection = this.separate();
    const alignmentDirection = this.align();
    const cohesionDirection = this.cohesion();

    separationDirection.multiply(this.behavior.SeparationWeight());
    alignmentDirection.multiply(this.behavior.AlignmentWeight());
    cohesionDirection.multiply(this.behavior.CohesionWeight());

    const direction = separationDirection.add(alignmentDirection).add(cohesionDirection).add(this.customIntentsDirectionSum);
    this.acceleration.add(this.steer(direction));

    this.customIntentsDirectionSum.set(0, 0);
  }

  /**
   * Apply the acceleration from the steer force.
   */
  move() {
    const object = this.behavior.owner;
    const timeDelta = object.getElapsedTime(object.getInstanceContainer()) / 1000;
    this.acceleration.multiply(timeDelta);

    const previousVelocityX = this.velocity.x;
    const previousVelocityY = this.velocity.y;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.behavior.MaxSpeed());
    this.acceleration.set(0, 0);

    if (this.behavior.ShouldRotate()) {
      let theta = this.velocity.heading() * 180 / Math.PI;
      object.setAngle(theta);
    }
    // Verlet integration
    object.setX(object.x + (previousVelocityX + this.velocity.x) / 2 * timeDelta);
    object.setY(object.y + (previousVelocityY + this.velocity.y) / 2 * timeDelta);
  }

  /**
   * Calculates and applies steering force towards a direction
   * @param {Vector} desiredDirection
   * @return {Vector} alignment force
   */
  steer(desiredDirection) {
    desiredDirection.normalize();
    desiredDirection.multiply(this.behavior.MaxSpeed());
    let steer = desiredDirection.subtract(this.velocity);
    steer.limit(this.behavior.MaxAcceleration());
    return steer;
  }

  /**
   * Separation: checks for nearby boids.
   * @return {Vector} separation direction
   */
  separate() {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const separationRadius = this.behavior.SeparationRadius();
    this.separationDirection.set(0, 0);
    let diff = this.separateWorkingVector;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, separationRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      const otherObject = boid.behavior.owner;
      const distance = object.getDistanceToObject(otherObject);
      if (distance > 0) {
        diff = boid.getVectorTo(this, diff);
        diff.normalize();
        diff.divide(distance);
        this.separationDirection.add(diff);
      }
    }
    if (this.separationDirection.magnitudeSquare() > 0) {
      this.separationDirection.normalize();
    }
    return this.separationDirection;
  }

  /**
   * Alignment: calculate the average velocity for every nearby boid in the system
   * @return {Vector} alignment direction
   */
  align() {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const alignmentRadius = this.behavior.AlignmentRadius();
    this.alignmentDirection.set(0, 0);
    let count = 0;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, alignmentRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      this.alignmentDirection.add(boid.velocity);
      count++;
    }
    if (count > 0) {
      this.alignmentDirection.normalize();
    }
    return this.alignmentDirection;
  }

  /**
   * Cohesion: calculate direction vector towards the average location of all nearby boids
   * @return {Vector} cohesion direction
   */
  cohesion() {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const cohesionRadius = this.behavior.CohesionRadius();
    let count = 0;
    let sumX = 0;
    let sumY = 0;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, cohesionRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      const otherObject = boid.behavior.owner;
      sumX += otherObject.getCenterXInScene();
      sumY += otherObject.getCenterYInScene();
      count++;
    }
    if (count > 0) {
      sumX /= count;
      sumY /= count;

      // A vector pointing from the position to the target
      this.cohesionDirection.set(
        sumX - object.getCenterXInScene(),
        sumY - object.getCenterYInScene()
      )
    }
    return this.cohesionDirection.normalize();
  }
}

/**
 * A boids manager
 */
class BoidsManager {
  static searchArea = {minX: 0, minY: 0, maxX: 0, maxY: 0};
  /**
   * @type {Array<Boids>}
   */
  static foundBoids = [];

  /**
   * Create a manager.
   */
  constructor() {
    /**
     * @type {Set<Boid>}
     */
    this.boids = new Set();
    this.boidsRBush = new rbush();
  }

  /**
   * Create and register a boid.
   * @param {gdjs.RuntimeBehavior} behavior
   * @returns {Boid} the created Boid
   */
  add(behavior) {
    if (!behavior.__boidsExtension) {
      behavior.__boidsExtension = {
        boid: new Boid(behavior)
      };
    }
    const boid = behavior.__boidsExtension.boid;
    this.boids.add(boid);
    this.addToRBush(boid);
    return boid;
  }

  /**
   * Add a boid to the R-Tree.
   * @param {Boid} boid
   */
  addToRBush(boid) {
    if (boid.currentRBushAABB) {
      boid.currentRBushAABB.updateAABBFromOwner();
    }
    else {
      boid.currentRBushAABB = new gdjs.BehaviorRBushAABB(
        boid.behavior
      );
    }
    this.boidsRBush.insert(boid.currentRBushAABB);
  }

  /**
   * Unregister the boid.
   * @param {gdjs.RuntimeBehavior} behavior
   */
  remove(behavior) {
    const boid = behavior.__boidsExtension.boid;
    this.boids.delete(boid);

    this.removeFromRBush(boid);
  }

  /**
   * Remove a boid from the R-Tree.
   * @param {Boid} boid
   */
  removeFromRBush(boid) {
    this.boidsRBush.remove(boid.currentRBushAABB);
  }

  /**
   * Move all instances.
   */
  moveAll() {
    for (const boid of this.boids) {
      boid.flock();
    }
    for (const boid of this.boids) {
      boid.move();
      this.removeFromRBush(boid);
      this.addToRBush(boid);
    }
  }

  /**
   * Returns all the boids around the specified boid.
   * @param {Boid} boid
   * @param {number} radius
   * @return {Boid[]} An array with all boids near the object.
   */
  getAllBoidsAround(boid, radius) {
    const object = boid.behavior.owner;

    const x = object.getCenterXInScene();
    const y = object.getCenterYInScene();
    const searchArea = BoidsManager.searchArea;
    searchArea.minX = x - radius;
    searchArea.minY = y - radius;
    searchArea.maxX = x + radius;
    searchArea.maxY = y + radius;
    // TODO The R-Tree should not allocate an array.
    /** @type {Array<Boid>} */
    const nearbys = this.boidsRBush.search(searchArea);

    const radiusSq = radius * radius;
    const foundBoids = BoidsManager.foundBoids;
    foundBoids.length = 0;
    // Cap the number of boids between 20 and 40.
    const step = Math.ceil(nearbys.length / 40);
    for (let i = 0; i < nearbys.length; i += step) {
      const behavior = nearbys[i].behavior;
      const otherObject = behavior.owner;
      if (object === otherObject) {
        continue;
      }
      if (behavior._getCollisionLayer() !== behavior._getCollisionLayer()) {
        continue;
      }
      const distanceSq = object.getSqDistanceToObject(otherObject);
      if (distanceSq < radiusSq) {
        foundBoids.push(behavior.__boidsExtension.boid);
      }
    }
    return foundBoids;
  }
}

gdjs.__boidsExtension = {
  BoidsManager,
};

};
gdjs.evtsExt__BoidsMovement__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BoidsMovement__DefineHelperClasses.userFunc0x24ee2e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BoidsMovement__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BoidsMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BoidsMovement"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BoidsMovement__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__BoidsMovement__DefineHelperClasses.registeredGdjsCallbacks = [];