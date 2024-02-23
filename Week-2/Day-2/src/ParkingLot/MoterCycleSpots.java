package ParkingLot;

/* MARK:- MotorCycleSpots
   DESC: - Subclass of ParkingSpot representing parking spots for motorcycles.
         - Inherits functionality from the base class ParkingSpot.
         
*/


public class MoterCycleSpots extends ParkingSpot{
    MoterCycleSpots(Vehicle vehicle){
        assignVehicleToFreeSpot(vehicle);
    }

}
