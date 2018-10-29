({
	getBoatTypes : function(component) {
		var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){                
                component.set("v.boatTypes", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})