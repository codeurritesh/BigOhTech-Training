package ParkingLot;

/* MARK:- CompactSpots
   DESC: - Subclass of ParkingSpot representing compact parking spots.
         - Inherits functionality from the base class ParkingSpot.
         
*/

public class CompactSpots extends ParkingSpot{
    CompactSpots(Vehicle vehicle){
        assignVehicleToFreeSpot(vehicle);
    }

}
