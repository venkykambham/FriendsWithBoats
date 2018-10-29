({
    onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        console.log('main:boatTypeId**'+formData.boatTypeId);
		var boatsrchresultsCmp = component.find("boatsrchresults");
        boatsrchresultsCmp.search(formData.boatTypeId);
	}
})