package IndianPolitics;

/*
      MARK: Commisioner Class
      DESC: - This is the independent Class
            - In this class we are checking the Spends of the Leaders
            - If the Leader Spends is more than their limit then Arrest him
            - If the spend is less than limit then print Spends is under Limit
            - Here if the spends is high than we are Taking permission from the Prime Minister to Arrest and other Minister
            - We will not ask prime minister in case of Member or PM itself
   */
public class Commisioner {
    /*
      MARK: Checking PM Spends
      DESC: - We are checking the Spends of prime ministers
            - If the Spends is more than expected then we Say Spend Limit Exceeded
            - But in this case we are not Allow to Arrest PM
   */
    String canArestPossible(PrimeMinister primeMinister){

        if(primeMinister.doesPersonExceedSpendLimit()){
            return primeMinister.getPersonDetails()+"\nSPEND LIMIT EXCEEDED BUT PRIME MINISTER CAN'T BE ARREST";
        }

        return primeMinister.getPersonDetails()+"\nSPENDS IS UNDER LIMIT.";

    }

    /*
      MARK: Checking Members Spends
      DESC: - We are checking the Spands of the Member
            - If the spends is Higher than the limit then we Arrest the member without ther permission of Prime Minister
   */
    String canArestPossible(MemberOfParliament memberOfParliament){
        if(memberOfParliament.doesPersonExceedSpendLimit()){
                return memberOfParliament.getPersonDetails()+"\nHigh Spend!. PERSON ARRESTED!!!";

        }
        return memberOfParliament.getPersonDetails()+"\nSPENDS IS UNDER LIMIT.";

    }

    /*
  MARK: Checking Ministers Spends
  DESC: - We are checking the Spands of the Minister
        - If their spend is Higher than the limit
        - Then we have to take Permission of Prime minister to Arrest
        - Then We Arrest Member if PM Says yes
*/
    String canArestPossible(Minister minister,boolean primeMinisterPermission){
        if(minister.doesPersonExceedSpendLimit()){
            if(primeMinisterPermission)
                return minister.getPersonDetails()+"\nPERMISSION APPROVED. PERSON ARRESTED!!!";
            else
                return minister.getPersonDetails()+"\nHIGH SPENDS!! PERMISSION DENIED!!";        }

        return minister.getPersonDetails()+"\nSPENDS IS UNDER LIMIT.";

    }
}
