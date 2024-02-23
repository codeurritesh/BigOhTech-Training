package ParkingLot;

/* MARK:- ParkingSpot
   DESC: - Represents a parking spot with a spot number, occupancy status, assigned vehicle, and type.
*/
public class ParkingSpot {
    private int spotNumber;
    private boolean isFree=true;
    private Vehicle vehicle;
    private String type;

/* MARK:- assignVehicleToFreeSpot
   DESC: - Assigns a vehicle to the parking spot, updates the occupancy status, and sets the vehicle type.
         - Parameters:
             - vehicle: The vehicle to be assigned to the parking spot.
*/
    public void assignVehicleToFreeSpot(Vehicle vehicle){
        this.vehicle=vehicle;
        this.isFree=false;
        this.type=vehicle.getVehicleType();
    }

    /* MARK:- getVehicle
   DESC: - Returns the vehicle assigned to the parking spot
    */
    public Vehicle getVehicle() {
        return vehicle;
    }

/* MARK:- removeVehicleFromSpot
   DESC: - Removes the assigned vehicle from the parking spot and updates the occupancy status to free.
*/

    public void removeVehicleFromSpot(){
        this.vehicle=null;
        isFree=true;
    }

/* MARK:- isFree
   DESC: - Checks if the parking spot is free (unoccupied).
         - Returns:
             - true if the parking spot is free.
             - false if the parking spot is occupied.
*/
    public boolean isFree(){
        return isFree;
    }

}
