package HotelManagementSystem;

/**
 * MARK: Middleware Class
 * DESC: Acts as middleware to handle permissions, specifically admin permissions in the Hotel Management System.
 */
public class MiddleWare {
    private Adminstrator adminstrator;

    // MARK: Constructor
    // DESC: Initializes the Middleware by creating an instance of the Administrator class.

    public MiddleWare() {
        adminstrator=new Adminstrator();
    }

    // MARK: Get Permission Method
    // DESC: Retrieves permission status from the administrator to perform certain operations.
    public boolean getPermission(){
        return adminstrator.givePermissiono();
    }

}
