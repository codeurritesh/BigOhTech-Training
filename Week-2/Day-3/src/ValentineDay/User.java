package ValentineDay;

import java.util.ArrayList;


/* MARK:- User
   DESC: - Represents a user with a username, extending the Role class.

   - Constructor:
      - User: Initializes a User instance with the provided username.

   - Properties:
      - userName: Represents the username associated with the user.
      - location: Represents the location associated with the user.

   - Methods:
      - showUser: Displays the user's name.
   - Getter:
      - getUserName: Returns the username associated with the user.

   - Setter:
      - setUserName: Sets the username for the user.
*/

public class User extends Role {
    String userName;
    Location location;
    public User(String userName){
        this.userName=userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public void showUser(){
        System.out.println("------------------");
        System.out.println("Name: "+this.userName);
        System.out.println("------------------");
    }



}
