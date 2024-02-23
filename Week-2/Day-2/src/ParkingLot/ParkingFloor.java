package ParkingLot;

import java.util.ArrayList;

/* MARK:- ParkingFloor
   DESC: - Represents a parking floor within a multi-level parking lot.
         - Contains various types of parking spots for different vehicle sizes and types.
         - Manages information portals and a display board for the floor.
         - Tracks maximum capacities for each spot type.
*/
public class ParkingFloor {
    private ArrayList<HandicappedSpots> handicappedSpots;
    private ArrayList<LargeSpots> largeSpots;
    private ArrayList<CompactSpots> compactSpots;
    private ArrayList<MoterCycleSpots> moterCycleSpots;
    private ArrayList<ElectricSpots> electricSpots;
    private ArrayList<InformationPortal> informationPortal;
    private ParkingDisplayBoard parkingDisplayBoard;
    private final int maxHandicappedSpotsCount;
    private final int maxLargeSpotCount;
    private final int maxCompactSpotCount;
    private final int maxMoterCycleSpotCount;
    private final int maxElectricVehicleSpotCount;

/* MARK:- ParkingFloor (Initializer)
   DESC: - Initializes a ParkingFloor with specified maximum capacities for different types of parking spots.
         - Initializes lists for each type of parking spot, information portals, and sets up the display board.
         - Parameters:
             - maxHandicappedSpotsCount: Maximum capacity for handicapped parking spots.
             - maxLargeSpotCount: Maximum capacity for large parking spots.
             - maxCompactSpotCount: Maximum capacity for compact parking spots.
             - maxMotorCycleSpotCount: Maximum capacity for motorcycle parking spots.
             - maxElectricVehicleSpotCount: Maximum capacity for electric vehicle parking spots.
*/
    public ParkingFloor(int maxHandicappedSpotsCount, int maxLargeSpotCount, int maxCompactSpotCount, int maxMoterCycleSpotCount, int maxElectricVehicleSpotCount){
        this.maxHandicappedSpotsCount = maxHandicappedSpotsCount;
        this.maxLargeSpotCount = maxLargeSpotCount;
        this.maxCompactSpotCount = maxCompactSpotCount;
        this.maxMoterCycleSpotCount = maxMoterCycleSpotCount;
        this.maxElectricVehicleSpotCount = maxElectricVehicleSpotCount;
        handicappedSpots=new ArrayList<HandicappedSpots>();
        largeSpots=new ArrayList<LargeSpots>();
        compactSpots=new ArrayList<CompactSpots>();
        moterCycleSpots=new ArrayList<MoterCycleSpots>();
        electricSpots=new ArrayList<ElectricSpots>();
        informationPortal=new ArrayList<InformationPortal>();

    }

/* MARK:- findAndDelete
   DESC: - Finds and deletes the specified vehicle from the designated parking spot based on the parking type.
         - Parameters:
             - parkingType: Type of parking spot ("H" for handicapped, "E" for electric, "L" for large, "C" for compact, "M" for motorcycle).
             - vehicle: The vehicle to be removed from the parking spot.
         - Returns:
             - true if the vehicle was found and successfully removed.
             - false if the vehicle was not found in the specified parking type.
*/
    public boolean findAndDelete(String parkingType,Vehicle vehicle) {
        switch (parkingType) {
                        case "H": {
                            for (int i = 0; i < handicappedSpots.size(); i++) {
                                if (handicappedSpots.get(i).getVehicle() == vehicle) {
                                    handicappedSpots.get(i).removeVehicleFromSpot();
                                }
                                return true;
                            }
                            break;
                        }
                        case "E":{
                            for (int i = 0; i < electricSpots.size(); i++) {
                                if (electricSpots.get(i).getVehicle() == vehicle) {
                                    electricSpots.get(i).removeVehicleFromSpot();
                                }
                                return true;
                            }
                            break;
                        }
                        case "L":{
                            for (int i = 0; i < largeSpots.size(); i++) {
                                if (largeSpots.get(i).getVehicle() == vehicle) {
                                    largeSpots.get(i).removeVehicleFromSpot();
                                }
                                return true;
                            }
                            break;

                        }
                        case "C":{
                            for (int i = 0; i < compactSpots.size(); i++) {
                                if (compactSpots.get(i).getVehicle() == vehicle) {
                                    compactSpots.get(i).removeVehicleFromSpot();
                                }
                                return true;
                            }
                            break;

                        }
                        case "M":{
                            for (int i = 0; i < moterCycleSpots.size(); i++) {
                                if (moterCycleSpots.get(i).getVehicle() == vehicle) {
                                    moterCycleSpots.get(i).removeVehicleFromSpot();
                                }
                                return true;
                            }
                            break;

                        }
        }
        return false;

    }

/* MARK:- isSpaceFreeFortypeAndSet
   DESC: - Checks if there is a free space for the specified parking type and sets the provided vehicle accordingly.
         - Parameters:
             - parkingType: Type of parking spot ("H" for handicapped, "E" for electric, "L" for large, "C" for compact, "M" for motorcycle).
             - vehicle: The vehicle to be assigned to the parking spot.
         - Returns:
             - true if there is a free space and the vehicle is successfully assigned to the parking spot.
             - false if there is no free space for the specified parking type.
*/

    public boolean isSpaceFreeFortypeAndSet(String parkingType, Vehicle vehicle){
        switch (parkingType){
            case "H":{
                if(handicappedSpots.size()<maxHandicappedSpotsCount){
                    handicappedSpots.add(new HandicappedSpots(vehicle));
                    return true;
                }
                return false;
            }
            case "E":{
                if(electricSpots.size()<maxElectricVehicleSpotCount){
                    electricSpots.add(new ElectricSpots(vehicle));
                    return true;
                }
                return false;

            }
            case "L":{
                if(largeSpots.size()<maxLargeSpotCount){
                    largeSpots.add(new LargeSpots(vehicle));
                    return true;
                }
                return false;
            }
            case "C":{
                if(compactSpots.size()<maxCompactSpotCount){
                    compactSpots.add(new CompactSpots(vehicle));
                    return true;
                }
                return false;

            }
            case "M":{
                if(moterCycleSpots.size()<maxMoterCycleSpotCount){
                    moterCycleSpots.add(new MoterCycleSpots(vehicle));
                    return true;
                }
                return false;

            }
        }
        return false;
    }


}
