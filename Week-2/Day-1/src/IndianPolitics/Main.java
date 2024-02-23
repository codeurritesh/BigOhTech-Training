package IndianPolitics;
/*
Write a program to depict Indian Politics.
Consider the politics use cases :
MP: is a person who won from a constituency
getConstituency - return their winning constituency.
getDriver - returns the driver assigned for their vehicle (default car).
exceedsSpendingLimit - returns true or false if Mps exceeds to their spending limit.

PM->Ministers->MP (All of them are MPS) - PM has special permissions such as it can give permission to arrest any minister.
PM enjoys special benefits such as Aircraft (along with car) and its designated driver.
Note: PM spending limit : 1 crore, Ministers: 10 lakhs, MP: 1 lakh.
Need to design in a way  where Commisioner class can arrest MP, Ministers and PM when their expense exceeds their spending limit:
canArrest - can arrest one or many MP.

Note: If PM  cant arrest.
If minister can arrest with PM permission
if mps they can be arrested without anyones permission.
In Short, If the MP is not PM then he can be arrested by commisoner , If he is minister then can be arrested with PMs permisison.

 */

public class Main {
    /*
        MARK: Main Functions
        DESC: - This is the Main class where we are starting the program
              - Here we are Creating the all three Leaders
              - We are also setting their names, TotalSpends, totalSpendLimit
              - Then we are Calling Commissioner to verify that is there anyone who is spending more then there limit
              - If someone found than Commissioner will Arrest him
     */
    public static void main(String[] args) {

        // Creating Objects of All Leaders
        MemberOfParliament memberOfParliament=new MemberOfParliament();
        Minister minister=new Minister();
        PrimeMinister primeMinister=new PrimeMinister();

        // Setting data to All the Objects
        primeMinister.setPersonDetails("Prime minister",1000000,100000);
        memberOfParliament.setPersonDetails("Member",1000000,100000);
        minister.setPersonDetails("Minister",10009990,100000);

        // Calling Commissioner to Verify the spends
        Commisioner commisioner=new Commisioner();
        System.out.println(commisioner.canArestPossible(primeMinister));
        System.out.println("-------------------");
        System.out.println(commisioner.canArestPossible(minister,primeMinister.arestPermission(minister)));
        System.out.println("-------------------");
        System.out.println(commisioner.canArestPossible(memberOfParliament));

    }
}
