package HotelManagementSystem;

/**
 * MARK: Agent Class
 * DESC: Represents an Agent in the Hotel Management System, extending the Person class.
 */
public class Agent extends Person{

// MARK: Constructor - Parameterized
// DESC: Initializes an Agent with specified details such as name, agent ID, age, and gender.

    public Agent(String name,int agentId,int age,String gender){
        setName(name);
        setId(agentId);
        setAge(age);
        setGender(gender);
    }
}
