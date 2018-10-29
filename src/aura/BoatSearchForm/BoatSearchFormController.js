({
    doInit : function(component, event, helper) {
        component.set("v.showNewBtn", $A.get("e.force:createRecord"));
		helper.getBoatTypes(component);
	},
    
	createBoat : function(component, event, helper) {
        var boatTypeId = component.get("v.boatTypeId"),
			createBoatEvent = $A.get("e.force:createRecord");

        if(!boatTypeId)
            boatTypeId = null;
        
        createBoatEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
            	'BoatType__c' : boatTypeId
            }
        });
        createBoatEvent.fire();
	},
    
    handleChange : function(component, event, helper) {
        var boatsrchevent = component.getEvent("formsubmit");
        boatsrchevent.setParams({
			"formData": {"boatTypeId":component.get("v.boatTypeId")}
        });
        console.log('form:boatsrchevent');
        boatsrchevent.fire();
    },
    
    onFormSubmit : function(component, event, helper) {
        var boatsrchevent = component.getEvent("formsubmit");
        boatsrchevent.setParams({
			"formData": {"boatTypeId":component.get("v.boatTypeId")}
        });
        console.log('form:boatsrchevent');
        boatsrchevent.fire();        
    }
})