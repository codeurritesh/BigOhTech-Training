package ValentineDay;

import java.util.ArrayList;

/* MARK:- Brick
   DESC: - Represents a brick with information such as a message, owner, brick ID, visibility status, location, and comments.

   - Constructor:
      - Brick: Initializes a Brick instance.
   - Properties:
      - message: Represents the content or message associated with the brick.
      - owner: Represents the owner or role associated with the brick.
      - brick_Id: Represents the unique identifier for the brick.
      - isVisible: Represents the visibility status of the brick.
      - location: Represents the location information associated with the brick.
      - comments: Represents a list of comments associated with the brick.
*/

public class Brick {
    String message;
    Role owener;
    int brick_Id;
    boolean isVisible;
    Location location;
    ArrayList<String>comments;
    Brick(){

    }
/* MARK:- Brick (Property Accessors, Mutators, and Constructor)
   DESC: - Provides accessors for various properties of the Brick class, includes mutators for updating properties, and defines a constructor to initialize the brick.

   - Accessors:
      - getMessage: Returns the content or message of the brick.
      - getOwener: Returns the owner or role associated with the brick.
      - isVisible: Returns the visibility status of the brick.
      - getComments: Returns a list of comments associated with the brick.

   - Mutators:
      - setMessage: Updates the message property of the brick.
      - setVisible: Sets the visibility status of the brick.
      - addComments: Adds a new comment to the list of comments.

   - Constructor:
      - Brick: Initializes a Brick instance with the provided user, message, location, visibility status, and an empty list of comments.
*/


    public String getMessage() {
        return message;
    }
    public void setMessage(String newMessage){
        this.message=newMessage;
    }

    public Role getOwener() {
        return owener;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public ArrayList<String> getComments() {
        return comments;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }
    public void addComments(String comment){
        this.comments.add(comment);
    }

    public Brick(Role user, String message,Location location){
        this.message=message;
        this.owener=user;
        this.isVisible=true;
        this.location=location;
        this.r
        this.comments=new ArrayList<>();
    }
}
