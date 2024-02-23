package IndianPolitics;
/*
  MARK: PrimeMinister Class
  DESC: - Here is the PrimeMinister Class that is Inheriting the Leader Class
        - PrimeMinister Is-A Leader
        - Is-A RelationShip found
        - PM Has two Vehicle Car ans AirCraft with its driver
*/
public class PrimeMinister extends Leader {
    AirCraft airCraft;
    AirCraftDriver airCraftDriver;

    /*
  MARK: Arrest Permission Method
  DESC: - This Method is used to give permission to Arrest the Minister
        - This is depand on the Spends of the minister
*/

    boolean arestPermission(Minister minister){
        //Checking the Minister Expense
        if (minister.doesPersonExceedSpendLimit()){
            return true;
        }
        return false;
    }


}
