package ParkingLot;


/* MARK:- Vehicle
   DESC: - Represents a vehicle with information such as vehicle number, vehicle type, parking type, associated parking ticket, and entry time.
*/
public class Vehicle {
    private String VehiclesNumber;
    private String VehicleType;
    private String ParkingType;
    private ParkingTicket parkingticket;
    private int entryTime;

     // Accessors and Mutators
    String getVehiclesNumber(){
        return VehiclesNumber;
    }
    String getVehicleType(){
        return VehicleType;
    }
    String getParkingType(){
        return this.ParkingType;
    }
    public void setParkingType(String type){
        this.ParkingType=type;
    }
    public void setEntryTime(int time){
        this.entryTime=time;
    }
    public int getEntryTime(){
        return this.entryTime;
    }

      // Constructor
    public Vehicle(String registrationNumber,String vehicleType){
        this.VehicleType=vehicleType;
        this.VehiclesNumber=registrationNumber;
    }




}
