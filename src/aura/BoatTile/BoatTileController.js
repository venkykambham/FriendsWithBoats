({
	onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
        
        var boatselect = component.getEvent("boatSelect");        
        boatselect.setParams({
            "boatId":boat.Id
        });
        boatselect.fire();        
        
        var boatselected = $A.get("e.c:BoatSelected");
        console.log("boatselected**"+boat.Id);
        boatselected.setParam("boat", boat);
        boatselected.fire();
        
        var plotMap = $A.get("e.c:PlotMapMarker");
        plotMap.setParams({
            "sObjectId": boat.Id,
            "lat": boat.Geolocation__Latitude__s,
            "long": boat.Geolocation__Longitude__s,
            "label": boat.Name
        });
        plotMap.fire();
	},
})