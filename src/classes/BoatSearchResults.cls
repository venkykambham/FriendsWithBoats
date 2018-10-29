public class BoatSearchResults {
	
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        System.debug('boatTypeId**'+boatTypeId);
        List<Boat__c> boats = new List<Boat__c>();
        if(String.isBlank(boatTypeId))
        	boats = [SELECT Id, Name, Picture__c, Contact__c, Contact__r.Name, BoatType__c FROM Boat__c];
        else
            boats = [SELECT Id, Name, Picture__c, Contact__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Contact__r.Name, BoatType__c FROM Boat__c WHERE BoatType__c = :boatTypeId];
        System.debug('boats** '+boats);
        return boats;
    }
}