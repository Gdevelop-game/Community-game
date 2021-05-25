
gdjs.evtsExt__Bounce__Bounce = gdjs.evtsExt__Bounce__Bounce || {};

/**
 * Behavior generated from Bounce
 */
gdjs.evtsExt__Bounce__Bounce.Bounce = class Bounce extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.OldX = Number("0") || 0;
    this._behaviorData.OldY = Number("") || 0;
    this._behaviorData.OldForceAngle = Number("") || 0;
    this._behaviorData.OldForceLength = Number("") || 0;
    this._behaviorData.NormalAngle = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.OldX !== newBehaviorData.OldX)
      this._behaviorData.OldX = newBehaviorData.OldX;
    if (oldBehaviorData.OldY !== newBehaviorData.OldY)
      this._behaviorData.OldY = newBehaviorData.OldY;
    if (oldBehaviorData.OldForceAngle !== newBehaviorData.OldForceAngle)
      this._behaviorData.OldForceAngle = newBehaviorData.OldForceAngle;
    if (oldBehaviorData.OldForceLength !== newBehaviorData.OldForceLength)
      this._behaviorData.OldForceLength = newBehaviorData.OldForceLength;
    if (oldBehaviorData.NormalAngle !== newBehaviorData.NormalAngle)
      this._behaviorData.NormalAngle = newBehaviorData.NormalAngle;

    return true;
  }

  // Properties:
  
  _getOldX() {
    return this._behaviorData.OldX !== undefined ? this._behaviorData.OldX : Number("0") || 0;
  }
  _setOldX(newValue) {
    this._behaviorData.OldX = newValue;
  }
  _getOldY() {
    return this._behaviorData.OldY !== undefined ? this._behaviorData.OldY : Number("") || 0;
  }
  _setOldY(newValue) {
    this._behaviorData.OldY = newValue;
  }
  _getOldForceAngle() {
    return this._behaviorData.OldForceAngle !== undefined ? this._behaviorData.OldForceAngle : Number("") || 0;
  }
  _setOldForceAngle(newValue) {
    this._behaviorData.OldForceAngle = newValue;
  }
  _getOldForceLength() {
    return this._behaviorData.OldForceLength !== undefined ? this._behaviorData.OldForceLength : Number("") || 0;
  }
  _setOldForceLength(newValue) {
    this._behaviorData.OldForceLength = newValue;
  }
  _getNormalAngle() {
    return this._behaviorData.NormalAngle !== undefined ? this._behaviorData.NormalAngle : Number("") || 0;
  }
  _setNormalAngle(newValue) {
    this._behaviorData.NormalAngle = newValue;
  }
}

// Methods:
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects2= [];

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.mapOfGDgdjs_46evtsExt_95_95Bounce_95_95Bounce_46Bounce_46prototype_46BounceOffContext_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1});gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1 */

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.conditionTrue_1 = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2);

for(var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getX() != (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()) ) {
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2);

for(var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getY() != (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()) ) {
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNormalAngle(gdjs.toDegrees(Math.atan2((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()), (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()))));
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].addPolarForce((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalAngle()) + gdjs.evtTools.common.angleDifference((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalAngle()), (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldForceAngle()) + 180), (gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldForceLength()), 1);
}
}}

}


};gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldForceAngle((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getAverageForce().getAngle()));
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldForceLength((gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].getAverageForce().getLength()));
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].separateFromObjectsList(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.mapOfGDgdjs_46evtsExt_95_95Bounce_95_95Bounce_46Bounce_46prototype_46BounceOffContext_46GDObstacleObjects1Objects, true);
}
}
{ //Subevents
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOff = function(Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
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
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Bounce::Bounce", gdjs.evtsExt__Bounce__Bounce.Bounce);
