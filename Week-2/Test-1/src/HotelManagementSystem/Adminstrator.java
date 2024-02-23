package HotelManagementSystem;

/**
 * MARK: Administrator Class
 * DESC: Represents an Administrator in the Hotel Management System, extending the Person class.
 */
public class Adminstrator extends Person{

    // MARK: Constructor - Parameterized
    // DESC: Initializes an Administrator with specified details such as name, user ID, age, and gender.
    public Adminstrator(String name, int userId, int age, String gender){
        setAge(age);
        setName(name);
        setGender(gender);
        setId(userId);
    }

    // MARK: Default Constructor
    // DESC: Creates an empty Administrator object.
    public Adminstrator(){

    }

    // MARK: Give Permission Method
    // DESC: Provides permission, always returning true for administrators.

    public boolean givePermissiono(){
        return true;
    }
}
