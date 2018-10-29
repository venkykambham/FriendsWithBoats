({
	onBoatSelected : function(component, event, helper) {
		var boatSelected = event.getParam("boat");
        console.log("boatselectedId**"+boatSelected.Id);
        component.set("v.Id", boatSelected.Id);
        component.set("v.boat", boatSelected);
        
        // reloads the current record (reload by the id)
        var currentRecord = component.find("service");
        currentRecord.set("v.Id", boatSelected.Id);
        currentRecord.reloadRecord();
	},
    
    onBoatReviewAdded : function(component, event, helper) {
        component.find("tabs").set("v.selectedTabId", "boatreviewtab");
        var refreshReviews = component.find("boatReviews");
        refreshReviews.refresh();
    }
})