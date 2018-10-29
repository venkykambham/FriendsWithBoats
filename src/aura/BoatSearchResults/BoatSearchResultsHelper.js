({
	onSearch : function(component) {
		var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : component.get("v.boatTypeId")
        });
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                var boats = response.getReturnValue();
                component.set("v.boats", boats);
            }
        });
        $A.enqueueAction(action);
	}
})