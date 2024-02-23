package ParkingLot;

 /* MARK:- ParkingTicket
   DESC: - Represents a parking ticket with information such as vehicle number, vehicle type, and entry time.
*/

public class ParkingTicket {
    private String vehicleNumber;
    private String vehicleType;
    private int entryTime;

/* MARK:- ParkingTicket
   DESC: - Represents a parking ticket with information such as vehicle number, vehicle type, and entry time.
         - Parameters:
             - registrationNumber: The registration number of the vehicle.
             - vehicleType: The type of the vehicle.
             - entryTime: The entry time of the vehicle.
*/

    ParkingTicket(String registrationNumber,String vehicleType,int entryTime){
        this.vehicleNumber=registrationNumber;
        this.entryTime=entryTime;
        this.vehicleType=vehicleType;
    }

/* MARK:- showTicket
   DESC: - Displays the details of the parking ticket, including vehicle number, vehicle type, and entry time.
*/

    public void showTicket(){
        System.out.println("--------------------------------");
        System.out.println("\t\t\t TICKET");
        System.out.println("Vehicle Number: "+this.vehicleNumber);
        System.out.println("Vehicle type: "+this.vehicleType);
        System.out.println("Entry Time: "+this.entryTime);
        System.out.println("--------------------------------");

    }
}
