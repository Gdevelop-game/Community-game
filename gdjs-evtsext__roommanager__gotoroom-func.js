gdjs.evtsExt__RoomManager__goToRoom = {};

gdjs.evtsExt__RoomManager__goToRoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__goToRoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__goToRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Rooms");
}{runtimeScene.getGame().getVariables().get("currentRoomID").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0));
}}

}


};

gdjs.evtsExt__RoomManager__goToRoom.func = function(runtimeScene, id, parentEventsFunctionContext) {
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
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RoomManager__goToRoom.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

