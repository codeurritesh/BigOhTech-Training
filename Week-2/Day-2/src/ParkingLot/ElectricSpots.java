package ParkingLot;

/* MARK:- ElectricSpots
   DESC: - Subclass of ParkingSpot representing parking spots equipped for electric vehicles.
         - Inherits functionality from the base class ParkingSpot.
         
*/

public class ElectricSpots extends ParkingSpot{
    ElectricSpots(Vehicle vehicle){
        assignVehicleToFreeSpot(vehicle);
    }

}
