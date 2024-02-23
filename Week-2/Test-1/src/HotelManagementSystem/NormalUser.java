package HotelManagementSystem;

/**
 * MARK: NormalUser Class
 * DESC: Represents a normal user in the Hotel Management System, extending the Person class.
 */

public class NormalUser extends Person{

    // MARK: Constructor - Parameterized
    // DESC: Initializes a NormalUser with specified details such as name, user ID, age, and gender.
    public NormalUser(String name, int userId, int age, String gender){
        setAge(age);
        setName(name);
        setGender(gender);
        setId(userId);
    }
}
