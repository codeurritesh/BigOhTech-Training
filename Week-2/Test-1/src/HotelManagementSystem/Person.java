package HotelManagementSystem;

/**
 * MARK: Person Class
 * DESC: Represents a generic person in the Hotel Management System, serving as the base class for different user types.
 */
public class Person {
    private String name;
    private int age;
    private String gender;
    private int id;

    // MARK: Getter and Setter Methods for ID
    // DESC: Provide access to and modification of the person's ID.
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // MARK: Getter and Setter Methods for Name
    // DESC: Provide access to and modification of the person's name.
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // MARK: Getter and Setter Methods for Age
    // DESC: Provide access to and modification of the person's age.
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // MARK: Getter and Setter Methods for Gender
    // DESC: Provide access to and modification of the person's gender.
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
