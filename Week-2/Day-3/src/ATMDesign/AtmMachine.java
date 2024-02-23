package ATMDesign;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

/* MARK:- AtmMachine
   DESC: - Represents an ATM machine with information such as machine name, machine location, total amount, and available denominations.
*/

public class AtmMachine {
    String machineName;
    String machineLocation;
    int totalAmount;
    ArrayList<Denomination>denominations;

/* MARK:- AtmMachine (Property Accessors and Mutators)
   DESC: - Provides accessors and mutators for various properties of the AtmMachine class.
         - Properties include machine name, machine location, and total amount.
*/
//Mutators
    public void setMachineName(String machineName) {
        this.machineName = machineName;
    }
    public void setMachineLocation(String machineLocation) {
        this.machineLocation = machineLocation;
    }
    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }
    public String getMachineName() {
        return machineName;
    }

    public String getMachineLocation() {
        return machineLocation;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

/* MARK:- AtmMachine (Constructor)
   DESC: - Initializes an AtmMachine with the specified name and location, setting the total amount to zero and creating an empty list of denominations.
         - Parameters:
             - name: The name of the ATM machine.
             - location: The location of the ATM machine.
*/
 public AtmMachine(String name,String location){
        this.machineName=name;
        this.machineLocation=location;
        this.totalAmount=0;
        this.denominations=new ArrayList<Denomination>();
    }
/* MARK:- showAtmDetails
   DESC: - Displays details of the ATM, including machine name, machine location, total amount, and denominations with their counts.
*/

    public void showAtmDetails(){
        System.out.println("-----------------------------------");
        System.out.println("ATM Name: "+machineName);
        System.out.println("Machine Location: "+machineLocation);
        System.out.println("Total Amount: "+totalAmount);
        for(Denomination denomination:denominations){
            System.out.println(denomination.getValue()+" Notes: "+ denomination.getCount());
        }
        System.out.println("-----------------------------------");
    }

/* MARK:- topUp
   DESC: - Adds funds to the ATM machine by increasing the total amount and updating the denominations based on the provided value and count.
         - Parameters:
             - value: The denomination value (e.g., 100, 500).
             - count: The count of notes to be added.
*/

    public void topUp(int value,int count){
        this.totalAmount+=value*count;

        if(this.denominations.size()==0){
            Denomination obj=new Denomination(value, count);
            denominations.add(obj);
            return;
        }
        for(int i=0;i<this.denominations.size();i++) {
            if (this.denominations.get(i).getValue() == value) {
                denominations.get(i).incrementCount(count);
                System.out.println("incrementing count");
                return;
            }
        }
                Denomination obj=new Denomination(value, count);
                denominations.add(obj);
    }
/* MARK:- withdrawMoney
   DESC: - Processes a money withdrawal from the ATM machine, updating the total amount and denominations based on the specified withdrawal amount.
         - Parameters:
             - amount: The amount to be withdrawn.
   NOTE: This method follows the greedy approach, starting with the highest denomination and moving to lower denominations to fulfill the withdrawal amount.

   - Checks if the total amount in the ATM is sufficient for the withdrawal.
   - Sorts the denominations in descending order (from highest to lowest).
   - Validates that the withdrawal amount is a multiple of 100.
   - Initializes a HashMap 'currency' to track the count of each denomination used in the withdrawal.
   - Iterates through the sorted denominations and calculates the count of each denomination required to fulfill the withdrawal amount.
   - Updates the 'currency' HashMap with the count of each denomination used.
   - Adjusts the remaining withdrawal amount after each iteration.
*/

    public void withdrawMoney(int amount){
        if(this.totalAmount<amount){
            System.out.println("Insufficient Balance! ");
            return;
        }
        System.out.println("Amount Withdrawal Successfully");
        Collections.sort(denominations,(a,b)-> Integer.compare(b.getValue(),a.getValue()));
        if(amount % 100!=0){
            System.out.println("ERROR:Withdrawal Amount must be Multiple of 100");
            return;
        }
        HashMap<Integer,Integer>currency=new HashMap<>();
        for (Denomination denomination:denominations){
            int value=denomination.getValue();
            int count=Math.min(amount/value,denomination.getCount());
            if(count!=0)
            currency.put(value,count);
            amount-=count*value;
        }
//        System.out.println(currency);
        for(int keys:currency.keySet()){
            for(Denomination denomination:denominations){
                if (denomination.getValue() == keys) {
                    denomination.decrementCount(currency.get(keys));
                    break;
                }
            }
            this.totalAmount-=keys*currency.get(keys);
            System.out.println(keys+"x"+currency.get(keys)+" Notes");
        }
    }
}
