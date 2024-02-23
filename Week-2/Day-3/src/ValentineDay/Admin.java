package ValentineDay;

/* MARK:- Admin
   DESC: - Represents an Admin role with information such as admin name and location.
         - Extends the Role class.

   - Constructor:
      - Admin: Initializes the Admin with the specified admin name.
*/
public class Admin extends Role{
    String adminName;
    Location location;
    public Admin(String userName){
        this.adminName=userName;
    }

/* MARK:- Admin (Property Accessors and Methods)
   DESC: - Provides accessors for the adminName property and includes methods for setting the admin name and displaying user details.

   - Accessors:
      - getAdminName: Returns the admin name.

   - Mutators:
      - setAdminName: Sets the admin name.

   - Methods:
      - showUser: Displays user details, including the admin name.
*/

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String userName) {
        this.adminName = userName;
    }
    public void showUser(){
        System.out.println("------------------");
        System.out.println("Name: "+this.adminName);
        System.out.println("------------------");
    }
}
