package ParkingLot;

/* MARK:- LargeSpots
   DESC: - Subclass of ParkingSpot representing parking spots for large-sized vehicles.
         - Inherits functionality from the base class ParkingSpot.
         
*/

public class LargeSpots extends ParkingSpot{
    LargeSpots(Vehicle vehicle){
        assignVehicleToFreeSpot(vehicle);
    }

}
