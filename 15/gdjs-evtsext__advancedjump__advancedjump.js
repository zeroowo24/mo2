
gdjs.evtsExt__AdvancedJump__AdvancedJump = gdjs.evtsExt__AdvancedJump__AdvancedJump || {};

/**
 * Behavior generated from Coyote time and air jump
 */
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump = class AdvancedJump extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerBehavior = behaviorData.PlatformerBehavior !== undefined ? behaviorData.PlatformerBehavior : "";
    this._behaviorData.CoyoteTimeFrameDuration = behaviorData.CoyoteTimeFrameDuration !== undefined ? behaviorData.CoyoteTimeFrameDuration : Number("0.25") || 0;
    this._behaviorData.CanCoyoteJump = false;
    this._behaviorData.WasInTheAir = false;
    this._behaviorData.AirJumpCountMaximum = behaviorData.AirJumpCountMaximum !== undefined ? behaviorData.AirJumpCountMaximum : Number("1") || 0;
    this._behaviorData.AreFloorJumpCountedAsAirJump = behaviorData.AreFloorJumpCountedAsAirJump !== undefined ? behaviorData.AreFloorJumpCountedAsAirJump : false;
    this._behaviorData.AirJumpCount = Number("0") || 0;
    this._behaviorData.WasJumpKeyReleased = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerBehavior !== newBehaviorData.PlatformerBehavior)
      this._behaviorData.PlatformerBehavior = newBehaviorData.PlatformerBehavior;
    if (oldBehaviorData.CoyoteTimeFrameDuration !== newBehaviorData.CoyoteTimeFrameDuration)
      this._behaviorData.CoyoteTimeFrameDuration = newBehaviorData.CoyoteTimeFrameDuration;
    if (oldBehaviorData.CanCoyoteJump !== newBehaviorData.CanCoyoteJump)
      this._behaviorData.CanCoyoteJump = newBehaviorData.CanCoyoteJump;
    if (oldBehaviorData.WasInTheAir !== newBehaviorData.WasInTheAir)
      this._behaviorData.WasInTheAir = newBehaviorData.WasInTheAir;
    if (oldBehaviorData.AirJumpCountMaximum !== newBehaviorData.AirJumpCountMaximum)
      this._behaviorData.AirJumpCountMaximum = newBehaviorData.AirJumpCountMaximum;
    if (oldBehaviorData.AreFloorJumpCountedAsAirJump !== newBehaviorData.AreFloorJumpCountedAsAirJump)
      this._behaviorData.AreFloorJumpCountedAsAirJump = newBehaviorData.AreFloorJumpCountedAsAirJump;
    if (oldBehaviorData.AirJumpCount !== newBehaviorData.AirJumpCount)
      this._behaviorData.AirJumpCount = newBehaviorData.AirJumpCount;
    if (oldBehaviorData.WasJumpKeyReleased !== newBehaviorData.WasJumpKeyReleased)
      this._behaviorData.WasJumpKeyReleased = newBehaviorData.WasJumpKeyReleased;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PlatformerBehavior: this._behaviorData.PlatformerBehavior,
    CoyoteTimeFrameDuration: this._behaviorData.CoyoteTimeFrameDuration,
    CanCoyoteJump: this._behaviorData.CanCoyoteJump,
    WasInTheAir: this._behaviorData.WasInTheAir,
    AirJumpCountMaximum: this._behaviorData.AirJumpCountMaximum,
    AreFloorJumpCountedAsAirJump: this._behaviorData.AreFloorJumpCountedAsAirJump,
    AirJumpCount: this._behaviorData.AirJumpCount,
    WasJumpKeyReleased: this._behaviorData.WasJumpKeyReleased,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PlatformerBehavior !== undefined)
      this._behaviorData.PlatformerBehavior = networkSyncData.props.PlatformerBehavior;
    if (networkSyncData.props.CoyoteTimeFrameDuration !== undefined)
      this._behaviorData.CoyoteTimeFrameDuration = networkSyncData.props.CoyoteTimeFrameDuration;
    if (networkSyncData.props.CanCoyoteJump !== undefined)
      this._behaviorData.CanCoyoteJump = networkSyncData.props.CanCoyoteJump;
    if (networkSyncData.props.WasInTheAir !== undefined)
      this._behaviorData.WasInTheAir = networkSyncData.props.WasInTheAir;
    if (networkSyncData.props.AirJumpCountMaximum !== undefined)
      this._behaviorData.AirJumpCountMaximum = networkSyncData.props.AirJumpCountMaximum;
    if (networkSyncData.props.AreFloorJumpCountedAsAirJump !== undefined)
      this._behaviorData.AreFloorJumpCountedAsAirJump = networkSyncData.props.AreFloorJumpCountedAsAirJump;
    if (networkSyncData.props.AirJumpCount !== undefined)
      this._behaviorData.AirJumpCount = networkSyncData.props.AirJumpCount;
    if (networkSyncData.props.WasJumpKeyReleased !== undefined)
      this._behaviorData.WasJumpKeyReleased = networkSyncData.props.WasJumpKeyReleased;
  }

  // Properties:
  
  _getPlatformerBehavior() {
    return this._behaviorData.PlatformerBehavior !== undefined ? this._behaviorData.PlatformerBehavior : "";
  }
  _setPlatformerBehavior(newValue) {
    this._behaviorData.PlatformerBehavior = newValue;
  }
  _getCoyoteTimeFrameDuration() {
    return this._behaviorData.CoyoteTimeFrameDuration !== undefined ? this._behaviorData.CoyoteTimeFrameDuration : Number("0.25") || 0;
  }
  _setCoyoteTimeFrameDuration(newValue) {
    this._behaviorData.CoyoteTimeFrameDuration = newValue;
  }
  _getCanCoyoteJump() {
    return this._behaviorData.CanCoyoteJump !== undefined ? this._behaviorData.CanCoyoteJump : false;
  }
  _setCanCoyoteJump(newValue) {
    this._behaviorData.CanCoyoteJump = newValue;
  }
  _toggleCanCoyoteJump() {
    this._setCanCoyoteJump(!this._getCanCoyoteJump());
  }
  _getWasInTheAir() {
    return this._behaviorData.WasInTheAir !== undefined ? this._behaviorData.WasInTheAir : false;
  }
  _setWasInTheAir(newValue) {
    this._behaviorData.WasInTheAir = newValue;
  }
  _toggleWasInTheAir() {
    this._setWasInTheAir(!this._getWasInTheAir());
  }
  _getAirJumpCountMaximum() {
    return this._behaviorData.AirJumpCountMaximum !== undefined ? this._behaviorData.AirJumpCountMaximum : Number("1") || 0;
  }
  _setAirJumpCountMaximum(newValue) {
    this._behaviorData.AirJumpCountMaximum = newValue;
  }
  _getAreFloorJumpCountedAsAirJump() {
    return this._behaviorData.AreFloorJumpCountedAsAirJump !== undefined ? this._behaviorData.AreFloorJumpCountedAsAirJump : false;
  }
  _setAreFloorJumpCountedAsAirJump(newValue) {
    this._behaviorData.AreFloorJumpCountedAsAirJump = newValue;
  }
  _toggleAreFloorJumpCountedAsAirJump() {
    this._setAreFloorJumpCountedAsAirJump(!this._getAreFloorJumpCountedAsAirJump());
  }
  _getAirJumpCount() {
    return this._behaviorData.AirJumpCount !== undefined ? this._behaviorData.AirJumpCount : Number("0") || 0;
  }
  _setAirJumpCount(newValue) {
    this._behaviorData.AirJumpCount = newValue;
  }
  _getWasJumpKeyReleased() {
    return this._behaviorData.WasJumpKeyReleased !== undefined ? this._behaviorData.WasJumpKeyReleased : false;
  }
  _setWasJumpKeyReleased(newValue) {
    this._behaviorData.WasJumpKeyReleased = newValue;
  }
  _toggleWasJumpKeyReleased() {
    this._setWasJumpKeyReleased(!this._getWasJumpKeyReleased());
  }
}

/**
 * Shared data generated from Coyote time and air jump
 */
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.SharedData = class AdvancedJumpSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedJump_AdvancedJumpSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedJump_AdvancedJumpSharedData = new gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedJump_AdvancedJumpSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("__CoyoteTime_CoyoteJump") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanNotAirJump();
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(false)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(false)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasInTheAir();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("__CoyoteTime_CoyoteJump");
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanJump();
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(true)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreFloorJumpCountedAsAirJump();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CanCoyoteJump((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(25098332);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Jump")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(25102052);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(0)
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).canJump()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasJumpKeyReleased();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanJump();
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1[i].removeTimer("__CoyoteTime_CoyoteJump");
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCoyoteTimeFrameDuration(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTime = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(false)
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isGrabbingPlatform()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(true)
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAir = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum(); }}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMax = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AirJumpsMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).canJump()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()); }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).canJump() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(1 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum()); }}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumps = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemainingAirJumpsContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCountMaximum(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximum = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Jump") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(0)
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanNotAirJump();
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Jump") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounter = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.ResetAirJumpCounterContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreFloorJumpCountedAsAirJump();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("AdvancedJump::AdvancedJump", gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump);
