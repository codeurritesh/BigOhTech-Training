package ValentineDay;

import java.util.ArrayList;
/* MARK:- Middleware
   DESC: - Represents a middleware for managing bricks, extending the Brick class.
 - Constructor:
      - MiddleWare: Initializes a MiddleWare instance with an empty list of bricks.
- Properties:
      - bricks: Represents a list of bricks managed by the middleware.
*/

public class MiddleWare extends Brick{
    ArrayList<Brick>bricks;
    public MiddleWare(){
        bricks=new ArrayList<>();
    }

/* MARK:- Middleware (Method: addBrick)
   DESC: - Adds a new brick to the list of bricks managed by the middleware.
 - Method:
      - addBrick: Adds a new brick with the specified message, user, and location to the list of bricks.
*/

    public void addBrick(String message,Role user,Location location){
        bricks.add(new Brick(user,message,location));
        System.out.println("Brick Added Successfully!!\n");
    }

/* MARK:- Middleware (Method: addCommentToBrick)
   DESC: - Adds a comment to a brick at the specified location.
   - Method:
      - addCommentToBrick: Searches for a brick at the given location and adds a comment if found.
*/

    public void addCommentToBrick(String comment,Role user,Location location){
        for( Brick brick:bricks){
            if(brick.location==location){
                System.out.println("Correct Location, Brick Found");
                brick.addComments(comment);
                System.out.println("Comment Successfully Added!!\n");
                return;
            }
        }
    }

/* MARK:-deleteBrick)
   DESC: - Deletes a brick at the specified location based on user permissions.

   - Method:
      - deleteBrick: Searches for a brick at the given location and deletes it if the user has the necessary permissions.
*/

    public void deleteBrick(Role user,Location location){
        for (Brick brick:bricks){
            if (brick.location==location){
                System.out.println("Correct Location, Brick Found");
                if (user instanceof Admin || brick.owener==user){
                    bricks.remove(brick);
                    System.out.println("Brick Deleted Successfully\n");
                    return;
                }else{
                    System.out.println("This User Don't have right to delete this post\n");
                }

            }
        }
    }

/* MARK:- readBrick
   DESC: - Displays the message of a brick at the specified location.
- Method:
      - readBrick: Searches for a brick at the given location and displays its message if found.
*/

    public void readBrick(Role user,Location location){
        for (Brick brick:bricks){
            if (brick.location==location){
                System.out.println("Correct Location, Brick Found");
                System.out.println("---------------------------");
                System.out.println("Brick Message: "+brick.getMessage());
                System.out.println("---------------------------\n");
                return;
            }
        }
        System.out.println("No Brick Found at thi Location\n");
    }

/* MARK:-writeBrick
   DESC: - Modifies the message of a brick at the specified location based on user permissions.

   - Method:
      - writeBrick: Searches for a brick at the given location and updates its message if the user has the necessary permissions.
*/

    public void writeBrick(Role user,Location location,String message){
        for (Brick brick:bricks){
            if (brick.location==location){
                if(user instanceof Admin ||brick.owener!=user){
                    System.out.println("This User Don't have right to write in this post\n");
                    return;
                }
                System.out.println("Correct Location, Brick Found");
                brick.setMessage(message);
                System.out.println("Message Set Successfully\n");
                return;
            }
        }
        System.out.println("No Brick Found at this Location");
    }

}
