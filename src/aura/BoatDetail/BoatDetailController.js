({
    doInit : function(component, event, helper) {
        component.set("v.showFDBtn", $A.get("e.force:navigateToSObject"));
    },
    
    onFullDetails : function(component, event, helper) {
		var boatDetailPage = $A.get("e.force:navigateToSObject");
        boatDetailPage.setParams({
          "recordId": component.get("v.boat.Id")
        });
        boatDetailPage.fire();
	}
})