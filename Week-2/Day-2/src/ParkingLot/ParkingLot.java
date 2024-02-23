package ParkingLot;

import java.util.ArrayList;

/* MARK:- ParkingLot
   DESC: - Represents a parking lot with multiple floors, each having various types of parking spots.
         - Tracks the name, location, and counts of different parking spot types.
         - Manages entry and exit gates for vehicles.
*/

public class ParkingLot {
    private int floor;
    private String Name;
    private String Location;
    private int handicappedSpotsCount;
    private int largeSpotCount;
    private int compactSpotCount;
    private int moterCycleSpotCount;
    private int electricVehicleSoptCount;
    private int entryGates;
    private int exitGates;


/* MARK:- ParkingLot (Property Accessors and Mutators)
   DESC: - Provides accessors and mutators for various properties of the ParkingLot class.
         - Properties include handicapped spots count, large spot count, compact spot count, motorcycle spot count,
           electric vehicle spot count, and the current floor.
*/
    private ArrayList<ParkingFloor>parkingFloors;
      // Mutators
    public void setHandicappedSpotsCount(int newCount){
        this.handicappedSpotsCount=newCount;
    }
    public void setLargeSpotCount(int newCount){
        this.largeSpotCount=newCount;
    }
    public void setCompactSpotCount(int newCount){
        this.compactSpotCount=newCount;
    }
    public void setMoterCycleSpotCount(int newCount){
        this.moterCycleSpotCount=newCount;
    }
    public void setElectricVehicleSoptCount(int newCount){
        this.electricVehicleSoptCount=newCount;
    }
    public void setFloor(int newFloor){
        this.floor=newFloor;
    }



    public int  getHandicappedSpotsCount(){
        return this.handicappedSpotsCount;
    }
    public int getLargeSpotCount(){
        return this.largeSpotCount;
    }
    public int getCompactSpotCount(){
        return this.compactSpotCount;
    }
    public int getMoterCycleSpotCount(){
       return this.moterCycleSpotCount;
    }
    public int getElectricVehicleSoptCount(){
        return this.electricVehicleSoptCount;
    }
    public int getFloor(){
        return this.floor;
    }

 /* MARK:- getEntry
   DESC: - Processes the entry of a vehicle into the parking lot, finds a free slot for the specified parking type, and issues a parking ticket.
         - Parameters:
             - vehicle: The vehicle entering the parking lot.
             - entryTime: The entry time of the vehicle.
             - parkingType: Type of parking spot ("H" for handicapped, "E" for electric, "L" for large, "C" for compact, "M" for motorcycle).
*/
    
    public void getEntry(Vehicle vehicle,int entryTime,String parkingType){
          System.out.println("Finding "+parkingType+" type Slot...\n");
        vehicle.setParkingType(parkingType);
        vehicle.setEntryTime(entryTime);


        if(findFreeSlotAndSet(parkingType,vehicle)){
            switch (parkingType) {
                case "H": {
                    setHandicappedSpotsCount(getHandicappedSpotsCount()+1);
                    break;
                }
                case "E":{
                    setElectricVehicleSoptCount(getElectricVehicleSoptCount()+1);
                    break;
                }
                case "L":{
                    setLargeSpotCount(getLargeSpotCount()+1);
                    break;
                }
                case "C":{
                    setCompactSpotCount(getCompactSpotCount()+1);
                    break;
                }
                case "M":{
                    setMoterCycleSpotCount(getMoterCycleSpotCount()+1);
                    break;
                }
        }
        ParkingTicket ticket=new ParkingTicket(vehicle.getVehiclesNumber(), vehicle.getVehicleType(),entryTime);
            ticket.showTicket();

        }
    }


//    public ParkingLot(int maxHandicappedSpotsCount, int maxLargeSpotCount, int maxCompactSpotCount, int maxMoterCycleSpotCount, int maxElectricVehicleSpotCount,String name,String location,int floor) {
      public ParkingLot(String name,String location,int entryPoints,int exitPoints){
        this.Name=name;
        this.Location=location;
        this.entryGates=entryPoints;
        this.exitGates=exitPoints;
        this.parkingFloors=new ArrayList<ParkingFloor>();

    }

/* MARK:- addNewFloor
   DESC: - Adds a new parking floor to the parking lot with specified maximum capacities for different types of parking spots.
         - Parameters:
             - maxHandicappedSpotsCount: Maximum capacity for handicapped parking spots on the new floor.
             - maxLargeSpotCount: Maximum capacity for large parking spots on the new floor.
             - maxCompactSpotCount: Maximum capacity for compact parking spots on the new floor.
             - maxMotorCycleSpotCount: Maximum capacity for motorcycle parking spots on the new floor.
             - maxElectricVehicleSpotCount: Maximum capacity for electric vehicle parking spots on the new floor.
*/

    public void addNewFloor(int maxHandicappedSpotsCount, int maxLargeSpotCount, int maxCompactSpotCount, int maxMoterCycleSpotCount, int maxElectricVehicleSpotCount){
        ParkingFloor parkingFloor=new ParkingFloor(maxHandicappedSpotsCount,maxLargeSpotCount,maxCompactSpotCount,maxMoterCycleSpotCount,maxElectricVehicleSpotCount);
        parkingFloors.add(parkingFloor);
        setFloor(getFloor()+1);
        System.out.println("Floor Added Successfully!");
    }
    public void removeFloor(int floorNumber){
        if(floorNumber>=parkingFloors.size()){
            System.out.println("Invalid Floor Number!");
        return;
        }
    parkingFloors.remove(parkingFloors.get(floorNumber));
    setFloor(getFloor()-1);
    System.out.println("Floor Removed Successfully!");

    }

/* MARK:- findFreeSlotAndSet
   DESC: - Finds a free slot for the specified parking type across all parking floors and sets the provided vehicle.
         - Parameters:
             - parkingType: Type of parking spot ("H" for handicapped, "E" for electric, "L" for large, "C" for compact, "M" for motorcycle).
             - vehicle: The vehicle to be assigned to the free parking spot.
         - Returns:
             - true if a free slot is found and the vehicle is successfully assigned.
             - false if no free slot is found for the specified parking type.
*/

    
    public boolean findFreeSlotAndSet(String parkingType, Vehicle vehicle){
        for (int i=0;i<parkingFloors.size();i++) {
            if(parkingFloors.get(i).isSpaceFreeFortypeAndSet(parkingType,vehicle)){
                System.out.println("\uD83C\uDF89 Free Slot Found at Floor "+i+" \uD83C\uDF89 \n");
                return true;
            }
        }
        System.out.println("No Free Slot Found\n");
        return false;
    }

/* MARK:- getParkingLotDetails
   DESC: - Displays details of the parking lot, including name, location, total floors, number of entry gates, and number of exit gates.
*/

    public void getParkingLotDetails(){
        System.out.println("-------------------------------------------");
        System.out.println("\t\t\t\t PARKING LOT\n");
        System.out.println("Name: "+ this.Name);
        System.out.println("Location: "+ this.Location);
        System.out.println("Total Floors: "+this.floor);
        System.out.println("Number of Entry Gates: "+this.entryGates);
        System.out.println("Number of Exit Gates: "+this.exitGates);
        System.out.println("-------------------------------------------\n");

    }

/* MARK:- findVehicleAndRemove
   DESC: - Finds the specified vehicle in the parking lot and removes it from the designated parking spot.
         - Parameters:
             - parkingType: Type of parking spot ("H" for handicapped, "E" for electric, "L" for large, "C" for compact, "M" for motorcycle).
             - vehicle: The vehicle to be removed from the parking spot.
         - Returns:
             - true if the vehicle is found and successfully removed.
             - false if the vehicle is not found in any parking spot on any floor.
*/
    public boolean findVehicleAndRemove( String parkingType,Vehicle vehicle){
        for (ParkingFloor floor: parkingFloors) {
            if(floor.findAndDelete(parkingType,vehicle)){
                System.out.println("Vehicle exit!");
                return true;
            }
        }
        return false;
    }


/* MARK:- getExit
   DESC: - Processes the exit of a vehicle from the parking lot, finds and removes the vehicle from its parking spot, and updates the respective parking type count.
         - Parameters:
             - vehicle: The vehicle exiting the parking lot.
             - exitTime: The exit time of the vehicle.
*/
    public void getExit(Vehicle vehicle, int exitTime) {
        if(findVehicleAndRemove(vehicle.getParkingType(),vehicle)){
            switch (vehicle.getParkingType()) {
                case "H": {
                    setHandicappedSpotsCount(getHandicappedSpotsCount()-1);
                    break;
                }
                case "E":{
                    setElectricVehicleSoptCount(getElectricVehicleSoptCount()-1);
                    break;
                }
                case "L":{
                    setLargeSpotCount(getLargeSpotCount()-1);
                    break;
                }
                case "C":{
                    setCompactSpotCount(getCompactSpotCount()-1);
                    break;
                }
                case "M":{
                    setMoterCycleSpotCount(getMoterCycleSpotCount()-1);
                    break;
                }
            }
            int totalTime=exitTime-vehicle.getEntryTime();
            System.out.println("Total Amount: "+ totalTime*4+"$");
        }
    }
}
