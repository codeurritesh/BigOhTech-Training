package InverterCompany;

/*
  MARK: Power Class
  DESC: - Power is the Independent Class
        - Which consist of many entities Current, Voltage
        - It Also consist of Methods like setCurrent, setVoltage, getPowerRating
*/
public class Power {
    int current;
    int voltage;

    /*
       MARK: setCurrent
       DESC: - This method is used to set current passed in the arguments
             - it is just setting in the Battery current of that object
*/
    public void setCurrent(int current) {
        this.current = current;
    }

    /*
     MARK: setVoltage
     DESC: - This method is used to set Voltage passed in the arguments
           - it is just setting in the Battery Voltage of that object
*/
    public void setVoltage(int voltage) {
        this.voltage = voltage;
    }

    public int getPowerRating() {
        return current*voltage;
    }
}
