package InverterCompany;

/*
  MARK: Battery
  DESC: - Battery is the Independent Class
        - Which consist of many entities BatteryCapicity, BatteryType, Status
        - It Also consist of Methods like setBatteryCapicity, setBatteryType, setStatus
*/
public class Battery {
        int batteryCapicity;
        String batteryType;
        String status;

    /*
    MARK: setBatteryCapicity
    DESC: - This method is used to set BetteryCapicity passed in the arguments
          - it is just setting in the Battery Capicity of that object
*/
    public void setBatteryCapicity(int batteryCapicity) {
        this.batteryCapicity = batteryCapicity;
    }


    /*
    MARK: setBatteryType
    DESC: - This method is used to set BetteryType passed in the arguments
      - it is just setting in the BatteryType of that object
*/
    public void setBatteryType(String batteryType) {
        this.batteryType = batteryType;
    }

    /*
      MARK: setStatus
      DESC: - This method is used to set Status passed in the arguments
        - it is just setting in the BatteryStatus of that object
*/
    public void setStatus(String status) {
        this.status = status;
    }
}
