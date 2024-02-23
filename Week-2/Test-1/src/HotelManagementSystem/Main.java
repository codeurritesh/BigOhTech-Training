package HotelManagementSystem;

public class Main {
    /**
     * MARK: Main Method
     * DESC: The main entry point for the application, demonstrating various functionalities of the Hotel Management System.
     */
    public static void main(String[] args) {
        // MARK: Initializing Hotel Management System
        // DESC: Creating an instance of the HotelManagementSystem class to manage hotels and users.
        HotelManagementSystem hotelManagementSystem=new HotelManagementSystem();

        // MARK: Adding Administrator User
        // DESC: Adding an administrator user with essential details like name, ID, age, and gender to the system.
        hotelManagementSystem.addUser(new Adminstrator("Admin gupta",101123,34,"Male"));

        // MARK: Adding Hotels
        // DESC: Adding hotels with specific details such as ID, name, location, features, room count, and an agent associated with each hotel.
        hotelManagementSystem.addHotel(101,"Hotel Madhuvan","Krishna Nagar, Mathura",new Feature(true,true,false),10,new Agent("Rohit",10010,20,"Male"));
        hotelManagementSystem.addHotel(102,"Hotel Brijwasi Royal","Railway road, Mathura",new Feature(false,true,true),4,new Agent("Ritesh",10012,23,"Male"));

        // MARK: Showing Hotels
        // DESC: Displaying the details of all hotels in the system.
        hotelManagementSystem.showHotels();

        // MARK: Updating Hotel Details
        // DESC: Updating details of a specific hotel using its ID.
        hotelManagementSystem.updateHotelDetails(102,"Hotel Brijwasi inn","Railway road, Mathura",new Feature(true,false,true),15,new Agent("Sakshi",10012,23,"Female"));

        // MARK: Showing Updated Hotels
        // DESC: Displaying the details of hotels after updating a specific hotel.
        hotelManagementSystem.showHotels();

        // MARK: Deleting Hotel
        // DESC: Attempting to delete a hotel using its ID, displaying an error message for an invalid hotel ID.
        hotelManagementSystem.deleteHotel(108);//Show Invalid Hotel ID
//        hotelManagementSystem.deleteHotel(102);

        // MARK: Showing Hotels After Deletion
        // DESC: Displaying the details of hotels after attempting to delete a hotel.
        hotelManagementSystem.showHotels();

        // MARK: Adding Normal User
        // DESC: Adding a normal user with details like name, ID, age, and gender to the system.
        hotelManagementSystem.addUser(new NormalUser("Shiva Agrawal",101121,25,"Male"));

        //Used to Delete User by UserID
        //hotelManagementSystem.deleteUser(101121);

        // MARK: Searching Hotel by Name
        // DESC: Searching for a hotel by its name and displaying the details.
        hotelManagementSystem.searchHotelByName("Hotel Madhuvan");

        // MARK: Searching Hotel by Location
        // DESC: Searching for a hotel by its location and displaying the details.
        hotelManagementSystem.searchHotelByLocation("Krishna Nagar, Mathura");

        // MARK: Searching Hotel by Hotel ID
        // DESC: Searching for a hotel by its ID and displaying the details.
        hotelManagementSystem.searchHotelByHotelId(102);

        // MARK: Booking Rooms
        // DESC: Attempting to book rooms in a hotel with the specified ID.
        hotelManagementSystem.bookRoom(102);
        hotelManagementSystem.bookRoom(102);
        hotelManagementSystem.bookRoom(102);
        hotelManagementSystem.bookRoom(102);
        hotelManagementSystem.bookRoom(102);

        // MARK: Giving Feedback
        // DESC: Providing feedback for a specific hotel by mentioning comments and rating.
        hotelManagementSystem.giveFeedBack("NiceRoom",5,102);

        // MARK: Searching Hotel by Rating
        // DESC: Searching for hotels with a specific rating and displaying the details.
        hotelManagementSystem.searchHotelByRating(5);
    }
}
