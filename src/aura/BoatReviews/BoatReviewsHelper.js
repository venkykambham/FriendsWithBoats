({
	onInit : function(component) {
		var action = component.get("c.getAll");
        action.setParams({
            boatId: component.get("v.boat").Id
        });
        action.setCallback(this,function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.boatReviews",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})