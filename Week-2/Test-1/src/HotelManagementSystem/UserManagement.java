package HotelManagementSystem;

import java.util.ArrayList;

/**
 * MARK: UserManagement Class
 * DESC: Manages user-related operations in the Hotel Management System, including the addition and deletion of users.
 */
public class UserManagement {
    private ArrayList<Person> normalUsers;
    private ArrayList<Person> adminstrators;

    // MARK: Constructor
    // DESC: Initializes UserManagement with separate lists for normal users and administrators.
    public UserManagement(){
        this.normalUsers =new ArrayList<>();
        this.adminstrators=new ArrayList<>();
    }

    // MARK: Add User Method
    // DESC: Adds a user to the system, distinguishing between administrators and normal users. Prints corresponding success or error messages.
    public void addUser(Person person){
        if(person instanceof Agent){
            System.out.println("\nERROR:INVALID USER\n");
            return;
        }
        if (person instanceof Adminstrator){
            this.adminstrators.add(person);
            System.out.println("\nAdminstrator Added Successfully\n");
            return;
        }
        if(person instanceof NormalUser){
            normalUsers.add(person);
            System.out.println("\nNormal-User Added Successfully\n");
            return;
        }
        System.out.println("\nERROR: Something Wents Wrong\n");
    }

    // MARK: Delete User Method
    // DESC: Deletes a normal user from the system based on the provided user number. Prints success or error messages accordingly.
    public void deleteUser(int userNumber) {
        for( Person normalUser: normalUsers){
            if (normalUser.getId()==userNumber){
                normalUsers.remove(normalUser);
                System.out.println("User Deleted Successfully");
                return;
            }
        }
        System.out.println("\nERROR: Invalid User Number\n");
    }

}
