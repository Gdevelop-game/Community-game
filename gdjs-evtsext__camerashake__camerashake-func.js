gdjs.evtsExt__CameraShake__CameraShake = {};

gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__CameraShake.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_DurationTimer");
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_PowerX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerX")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerY")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Layer").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Camera").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerAngle")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerZoom")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeBetweenShakes")) || 0 : 0));
}}

}


{



}


{


{
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeForever"), false);
}}

}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1 = gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShakeForever") : false);
}
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeForever"), true);
}}

}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(0.5);
}}

}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber(0.08);
}}

}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes"));
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake").setNumber(1);
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(1);
}}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__CameraShake.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__CameraShake.func = function(runtimeScene, PowerX, PowerY, Layer, Camera, Duration, PowerAngle, PowerZoom, TimeBetweenShakes, ShakeForever, parentEventsFunctionContext) {
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
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "Duration") return Duration;
if (argName === "PowerAngle") return PowerAngle;
if (argName === "PowerZoom") return PowerZoom;
if (argName === "TimeBetweenShakes") return TimeBetweenShakes;
if (argName === "ShakeForever") return ShakeForever;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__CameraShake.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

