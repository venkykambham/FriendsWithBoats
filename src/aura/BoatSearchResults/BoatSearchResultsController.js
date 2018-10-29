({
    doInit : function(component, event, helper) {
        helper.onSearch(component);
    },
    
	doSearch : function(component, event, helper) {
        var params = event.getParam("arguments");
        if(params)
            component.set("v.boatTypeId", params.boatTypeId);
        console.log('params.boatTypeId** '+params.boatTypeId);
		helper.onSearch(component);
	},
    
    onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam("boatId");
        console.log("formdata.boatId**"+boatId);
        component.set("v.selectedBoatId", boatId);
    }
    
})