gdjs.evtsExt__RoomManager__onFirstSceneLoaded = {};

gdjs.evtsExt__RoomManager__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 1, 588, 360, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 2, 2170, 420, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 3, 320, 1650, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 4, 2310, 1260, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 5, 3735, 330, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__RoomManager__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RoomManager__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerFirstRuntimeSceneLoadedCallback(function(runtimeScene) {
    gdjs.evtsExt__RoomManager__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
});
