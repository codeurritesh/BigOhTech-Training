package ATMDesign;

public class Main {
    public static void main(String[] args) {
    AtmMachine atm=new AtmMachine("ICICI Bank","Rajiv Chowk");
        // Displaying initial ATM details
    atm.showAtmDetails();
        // Topping up the ATM with different denominations
    atm.topUp(2000,10);
    atm.topUp(500,10);
    atm.topUp(200,10);
    atm.topUp(100,10);
    atm.showAtmDetails();
        // Withdrawing money from the ATM
    atm.withdrawMoney(1900);
    atm.showAtmDetails();
    }
}
