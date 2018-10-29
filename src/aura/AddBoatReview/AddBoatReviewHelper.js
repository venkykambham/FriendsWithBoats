({
	onInit : function(component) {
		component.find("service").getNewRecord(
            "BoatReview__c", //objectApiName
            null, //recordTypeId
            false, //skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newBoatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                } else {
                    console.log("Record template initialized: " + rec.sobjectType);
                    component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                }
            })
        );
	},
    
    notifyUser : function(component) {
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
    }
})