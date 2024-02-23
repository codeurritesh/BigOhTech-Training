package InverterCompany;

/*
  MARK: Inverter Class
  DESC: - Inverter is the Independent Class
        - Which consist of many entities inverterName, inverterId, powerRating, Power
*/
public class Inverter {
    String inverterName;
    int inverterId;
    int powerRating;
    Power power;
    // We are Calling GetPowerRating Method to get the powerRating which use the current and voltage to Calculate this
    Inverter(){
        this.powerRating=power.getPowerRating();
    }



}
