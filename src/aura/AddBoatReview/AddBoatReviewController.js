({
	doInit : function(component, event, helper) {
		helper.onInit(component);
	},
    
    onSave : function(component, event, helper) {
        component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
        
        component.find("service").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {                
                //helper.notifyUser(component);
                var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "type": "success",
            "title": "Success!",
            "message": "Your review has been added successfully."
        });
        if(resultsToast)
            resultsToast.fire();
        else
            alert("Your review has been added successfully.");
                helper.onInit(component);
                
				var reviewAddedEvent = component.getEvent("boatReviewAdded");
                reviewAddedEvent.fire();
                
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving contact, error: ' +
                            JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
	},
    
    onRecordUpdated : function(component, event, helper) {
		//helper.notifyUser(component);
	},
})