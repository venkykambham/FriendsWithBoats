({
	doInit : function(component, event, helper) {
		helper.onInit(component);
	},
    
    onUserInfoClick : function(component, event, helper) {
		var userId = event.currentTarget.getAttribute("data-userid");
        var navevt = $A.get("e.force:navigateToSObject");
        navevt.setParams({
            "recordId": userId
        });
        navevt.fire();
	}
})