package IndianPolitics;

/*
    MARK: Leader Class
    DESC: - Leader Class is just defining the all the entities of the perticular person
          - Like: Name, CarDriver, totalSpends, totalSpendLimit, Car;
          - These are some entities that are valid for all the Leaders
          - We have Also defined the getConstituency(), SetPersonDetails(), doesPersonExceedSpendLimit(), getPersonDetails()
          - This Class will be Called as the parent Class of all other Classes of Leaders
 */
public class Leader {
    String name;
    CarDriver driver;
    int totalSpends;
    int totalSpendLimit;
    Car car;

    /*
        MARK: getConstituency Method
        DESC: This method is just returning the name of the Winning Constituency
     */
    String getConstituency(){
        return "Delhi";
    }

    /*
        MARK: setPersonDetails Method
        DESC: - This method is used to set the details of that particular Leaders
              - Here we are providing the 3 Arguments like name,totalspends and limit
              - Then we are just setting these value
     */
    void setPersonDetails(String name, int totalSpends, int totalSpendLimit){
        this.name=name;
        this.totalSpends=totalSpends;
        this.totalSpendLimit=totalSpendLimit;
    }

    /*
       MARK: getDriverForVehicle() Method
       DESC: This method is just returning the name of the Driver
    */
    Driver getDriverForVehicle(){
        return new Driver();
    }

    /*
       MARK: doesPersonExceedSpendLimit()
       DESC: - In this method we are checking that does the person is having higher expense then their limit
             - For this we are just returning the Boolean condition True And False
    */
    boolean doesPersonExceedSpendLimit(){
        if(totalSpends>totalSpendLimit){
            return true;
        }
        return false;
    }

    /*
      MARK: Getting the details of that Leaders
      DESC: - Printing the details of that particular leaders
            - For this we are just returning the Boolean condition True And False
   */
    String getPersonDetails(){
        return "Name: "+name;
    }
}
