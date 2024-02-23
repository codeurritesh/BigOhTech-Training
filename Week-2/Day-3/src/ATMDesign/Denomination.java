package ATMDesign;

/* MARK:- Denomination
   DESC: - Represents a denomination with information such as value and count.
*/

public class Denomination {
private int value;
private int count;

/* MARK:- Denomination (Property Accessors and Constructor)
   DESC: - Provides accessors for the value and count properties of the Denomination class, along with a constructor to initialize these properties.
          - Also includes methods to increment and decrement the count of denominations.

   - Accessors:
      - getValue: Returns the value of the denomination.
      - getCount: Returns the count of the denomination.

   - Constructor:
      - Denomination: Initializes the Denomination with the specified value and count.

   - Mutators:
      - incrementCount: Increases the count of the denomination by the specified value.
      - decrementCount: Decreases the count of the denomination by the specified value.
*/

    public int getValue() {
        return value;
    }
    public int getCount() {
        return count;
    }

    public Denomination(int value,int count){
        this.count=count;
        this.value=value;
    }

    public void incrementCount(int count) {
        this.count += count;
    }
    public void decrementCount(int count){
        this.count-=count;
    }
}
