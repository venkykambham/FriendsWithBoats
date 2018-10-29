({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    updateLocation : function(component, event, helper){
        var sobjectId = event.getParam("sObjectId"),
            lat = event.getParam("lat"),
            long = event.getParam("long"),
            label = event.getParam("label");
        
        component.set("v.location" ,{'lat':lat, 'long':long, 'label':label, 'sObjectId':sobjectId});
    }
})