package ParkingLot;

public class Main {
    public static void main(String[] args) {
//        ParkingLot parkingLot=new ParkingLot(5,5,5,5,5,"MultiLevel Parking","Rajiv Chowk,Gurugram",2);
       
/* MARK:- ParkingLot
   DESC: - Represents a multi-level parking lot.
         - Allows adding and removing floors with specified capacities.
         - Provides methods for vehicle entry and exit, including details tracking.
*/
        ParkingLot parkingLot=new ParkingLot("MultiLevel Parking","Rajiv Chowk,Gurugram",3,3);
        parkingLot.getParkingLotDetails();
        parkingLot.addNewFloor(5,5,5,5,5);
        parkingLot.addNewFloor(5,5,5,5,5);
        parkingLot.removeFloor(1);
        parkingLot.getParkingLotDetails();
        Vehicle vehicle=new Vehicle("HR29X4476","CAR");
        Vehicle vehicle2=new Vehicle("HR29X4476","TRUCK");
        Vehicle vehicle3=new Vehicle("HR29X4476","TRUCK");
        Vehicle vehicle4=new Vehicle("HR29X4476","TRUCK");
        Vehicle vehicle5=new Vehicle("HR29X4476","TRUCK");
        Vehicle vehicle6=new Vehicle("HR29X4476","TRUCK");
        parkingLot.getEntry(vehicle,1,"H");
        parkingLot.getEntry(vehicle2,9,"H");
        parkingLot.getEntry(vehicle3,9,"H");
        parkingLot.getEntry(vehicle4,9,"H");
        parkingLot.getEntry(vehicle5,9,"H");
        parkingLot.getEntry(vehicle6,9,"H");

        parkingLot.getParkingLotDetails();
        parkingLot.getExit(vehicle,10);
        parkingLot.getExit(vehicle,10);
        parkingLot.getExit(vehicle2,10);
        parkingLot.getParkingLotDetails();




    }
}
