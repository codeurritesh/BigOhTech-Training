package HotelManagementSystem;

/**
 * MARK: HotelManagementSystem Class
 * DESC: Represents the core class of the Hotel Management System, coordinating hotel and user management operations.

 * MARK: Constructor
 * DESC: Initializes the HotelManagementSystem by creating instances of ManagementsOfHotels and UserManagement.
 *       Displays a welcome message upon system initiation.

 * MARK: Hotel Management Methods
 * DESC: Provides methods to add, show, update, and delete hotels.
 *       Also includes methods for searching hotels by name, location, hotel ID, and rating.
 *       Allows room booking and feedback submission for a specific hotel.

 * MARK: User Management Methods
 * DESC: Includes methods for adding and deleting users.

 * MARK: Note on Rating Validation
 * DESC: The searchHotelByRating method validates that the provided rating is within the valid range (0-5).

 * Note: The system output includes a welcome message upon initialization.
 */

public class HotelManagementSystem {
    private ManagementsOfHotels managementsOfHotels;
    private UserManagement userManagement;


    public HotelManagementSystem(){
        this.managementsOfHotels=new ManagementsOfHotels();
        this.userManagement=new UserManagement();

        System.out.println("\nWELCOME TO THE HOTEL MANAGEMENT SYSTEM");
        System.out.println("---------------------------------------");
    }

    public void addHotel(int uniqueId,String name,String location,Feature feature,int numberOfRooms,Agent agent){
        managementsOfHotels.addHotel(uniqueId,name,location,feature,numberOfRooms,agent);
    }

    public void showHotels(){
        managementsOfHotels.showAllHotels();
    }

    public void updateHotelDetails(int uniqueHotelId,String name,String location,Feature feature,int numberOfRooms,Agent agent){
        managementsOfHotels.updateHotelDetails(uniqueHotelId,name,location,feature,numberOfRooms,agent);
    }

    public void deleteHotel(int uniqueHotelId) {
        managementsOfHotels.deleteHotel(uniqueHotelId);
    }

    public void addUser(Person person) {
        userManagement.addUser(person);
    }

    public void deleteUser(int userNumber) {
        userManagement.deleteUser(userNumber);
    }

    public void searchHotelByName(String name) {
        managementsOfHotels.searchHotelByName(name);
    }

    public void searchHotelByLocation(String location) {
        managementsOfHotels.searchHotelByLocation(location);
    }

    public void searchHotelByHotelId(int id) {
        managementsOfHotels.searchHotelByHotelId(id);
    }

    public void searchHotelByRating(int rating) {
        if(rating>5 || rating<0){
            System.out.println("ERROR:Invalid Rating Searched");
            return;
        }
        managementsOfHotels.searchHotelByRating(rating);
    }

    public void bookRoom(int hotelId) {
        managementsOfHotels.bookRoom(hotelId);
    }

    public void giveFeedBack(String comment, int rating,int hotelId) {
        managementsOfHotels.giveFeedBack(comment,rating,hotelId);
    }

}
