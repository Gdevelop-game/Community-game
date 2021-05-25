gdjs.IntroCode = {};
gdjs.IntroCode.GDcrossairObjects1= [];
gdjs.IntroCode.GDcrossairObjects2= [];
gdjs.IntroCode.GDTransitionsObjects1= [];
gdjs.IntroCode.GDTransitionsObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City1", true);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDcrossairObjects1.length = 0;
gdjs.IntroCode.GDcrossairObjects2.length = 0;
gdjs.IntroCode.GDTransitionsObjects1.length = 0;
gdjs.IntroCode.GDTransitionsObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
