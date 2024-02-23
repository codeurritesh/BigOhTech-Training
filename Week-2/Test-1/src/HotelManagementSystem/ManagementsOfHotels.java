package HotelManagementSystem;

import java.util.ArrayList;

/**
 * MARK: ManagementsOfHotels Class
 * DESC: Handles the management of hotels, including operations such as adding, updating, and deleting hotels.
 *       It also provides methods to search hotels by name, location, hotel ID, and rating.
 *       Additionally, this class manages room booking and feedback submission for a specific hotel.
 */
public class ManagementsOfHotels {
    private ArrayList<Hotel>hotels;
    private MiddleWare middleWare;

    // MARK: Getter Method for Hotels
    // DESC: Retrieves the list of hotels managed by this class.
    public ArrayList<Hotel> getHotels() {
        return this.hotels;
    }

    // MARK: Constructor
    // DESC: Initializes ManagementsOfHotels by creating instances of ArrayList for hotels and MiddleWare for permissions.
    public ManagementsOfHotels(){
        this.hotels=new ArrayList<>();
        this.middleWare=new MiddleWare();
    }

    // MARK: Add Hotel Method
    // DESC: Adds a new hotel to the system after obtaining admin permission.
    //       Creates rooms based on the specified number and features of the hotel.
    public void addHotel(int uniqueId, String name, String location, Feature feature, int numberOfRooms,Agent agent) {
        //Get Admin Permission
        if(!middleWare.getPermission()){
            System.out.println("Permission Denied By Admin");
            return;
        }
        hotels.add(new Hotel(uniqueId,name,location,feature,numberOfRooms,feature.isHaveAcRooms(),agent));
        System.out.println("Permission Approved by Admin, Hotel Added Successfully");
    }

    // MARK: Show All Hotels Method
    // DESC: Displays details of all hotels in the system.
    public void showAllHotels(){
        System.out.println("--------------------------------------");
        System.out.println("\t\t\t All Hotels");
        System.out.println("--------------------------------------");
        for(Hotel hotel:hotels){
            System.out.println("Name: "+hotel.getName());
            System.out.println("Hotel_ID: "+hotel.getHotelId());
            System.out.println("Rooms: "+hotel.getRooms().size());
            System.out.println("Locations: "+hotel.getLocation());
            System.out.println("Room Type: "+(hotel.getFeature().isHaveAcRooms()?"AC":"NON-AC"));
            System.out.println("Have Parking: "+hotel.getFeature().isHavePraking());
            System.out.println("Have Restaurant: "+hotel.getFeature().isHaveRestaurant());
            System.out.println("Agent Name: "+hotel.getAgent().getName());
            System.out.println("--------------------------------------");

        }
    }

    // MARK: Update Hotel Details Method
    // DESC: Updates the details of a specific hotel after obtaining admin permission.
    public void updateHotelDetails(int uniqueHotelId, String name, String location, Feature feature, int numberOfRooms, Agent agent) {
        //Get Admin Permission
        if(!middleWare.getPermission()){
            System.out.println("Permission Denied By Admin");
            return;
        }

        for (Hotel hotel:hotels){
            if (hotel.getHotelId()==uniqueHotelId){
                hotels.remove(hotel);
                hotels.add(new Hotel(uniqueHotelId,name,location,feature,numberOfRooms,feature.isHaveAcRooms(),agent));
                System.out.println("\nHotel Details Updated Successfully\n");
                return;
            }
        }
        System.out.println("Invalid Hotel-ID");
    }

    // MARK: Delete Hotel Method
    // DESC: Deletes a specific hotel after obtaining admin permission.
    public void deleteHotel(int uniqueHotelId) {
        //Get Admin permission
        if(!middleWare.getPermission()){
            System.out.println("Permission Denied By Admin");
            return;
        }
        for (Hotel hotel:hotels){
            if (hotel.getHotelId()==uniqueHotelId){
                hotels.remove(hotel);
                System.out.println("\nHotel Deleted Succesfully\n");
                return;
            }
        }
        System.out.println("Invalid Hotel-ID");
    }

    // MARK: Search Hotel by Name Method
    // DESC: Searches for a hotel by name and displays its details.
    public void searchHotelByName(String name){
        System.out.println("\n-----------------------------------");
        System.out.println("\t\tSearch Results...");
        System.out.println("-----------------------------------");
        for(Hotel hotel:getHotels()){
            if (hotel.getName().equals(name)){
                System.out.println("Name: "+hotel.getName());
                System.out.println("Hotel_ID: "+hotel.getHotelId());
                System.out.println("Rooms: "+hotel.getRooms().size());
                System.out.println("Locations: "+hotel.getLocation());
                System.out.println("Room Type: "+(hotel.getFeature().isHaveAcRooms()?"AC":"NON-AC"));
                System.out.println("Have Parking: "+hotel.getFeature().isHavePraking());
                System.out.println("Have Restaurant: "+hotel.getFeature().isHaveRestaurant());
                System.out.println("Agent Name: "+hotel.getAgent().getName());
                System.out.println("--------------------------------------");
            }
        }
    }

    // MARK: Search Hotel by Rating Method
    // DESC: Searches for hotels with a specific rating and displays their details.

    public void searchHotelByRating(int rating){
        System.out.println("\n-----------------------------------");
        System.out.println("\t\tSearch Results...");
        System.out.println("-----------------------------------");
        for(Hotel hotel:getHotels()){
            if (hotel.getFeedBack().getRating()==rating){
                System.out.println("Name: "+hotel.getName());
                System.out.println("Hotel_ID: "+hotel.getHotelId());
                System.out.println("Rooms: "+hotel.getRooms().size());
                System.out.println("Locations: "+hotel.getLocation());
                System.out.println("Room Type: "+(hotel.getFeature().isHaveAcRooms()?"AC":"NON-AC"));
                System.out.println("Have Parking: "+hotel.getFeature().isHavePraking());
                System.out.println("Have Restaurant: "+hotel.getFeature().isHaveRestaurant());
                System.out.println("Agent Name: "+hotel.getAgent().getName());
                System.out.println("--------------------------------------");
            }
        }
    }
    public void searchHotelByHotelId(int id){
        System.out.println("\n-----------------------------------");
        System.out.println("\t\tSearch Results...");
        System.out.println("-----------------------------------");
        for(Hotel hotel:getHotels()){
            if (hotel.getHotelId()==id){
                System.out.println("Name: "+hotel.getName());
                System.out.println("Hotel_ID: "+hotel.getHotelId());
                System.out.println("Rooms: "+hotel.getRooms().size());
                System.out.println("Locations: "+hotel.getLocation());
                System.out.println("Room Type: "+(hotel.getFeature().isHaveAcRooms()?"AC":"NON-AC"));
                System.out.println("Have Parking: "+hotel.getFeature().isHavePraking());
                System.out.println("Have Restaurant: "+hotel.getFeature().isHaveRestaurant());
                System.out.println("Agent Name: "+hotel.getAgent().getName());
                System.out.println("--------------------------------------");
            }
        }
    }
    public void searchHotelByLocation(String location){
        System.out.println("\n-----------------------------------");
        System.out.println("\t\tSearch Results...");
        System.out.println("-----------------------------------");
        for(Hotel hotel:getHotels()){
            if (hotel.getLocation().equals(location)){
                System.out.println("Name: "+hotel.getName());
                System.out.println("Hotel_ID: "+hotel.getHotelId());
                System.out.println("Rooms: "+hotel.getRooms().size());
                System.out.println("Locations: "+hotel.getLocation());
                System.out.println("Room Type: "+(hotel.getFeature().isHaveAcRooms()?"AC":"NON-AC"));
                System.out.println("Have Parking: "+hotel.getFeature().isHavePraking());
                System.out.println("Have Restaurant: "+hotel.getFeature().isHaveRestaurant());
                System.out.println("Agent Name: "+hotel.getAgent().getName());
                System.out.println("--------------------------------------");
            }
        }
    }

    public void bookRoom(int hotelId) {
        System.out.println("\t\tBooking is Under Process...");
        for(Hotel hotel:getHotels()){
            if (hotel.getHotelId()==hotelId){
                for(Room room: hotel.getRooms()){
                    if(room.isAvailable()){
                        System.out.println("\n-----------------------------------");
                        System.out.println("\t\tRoom Booked Successfully");
                        System.out.println("-----------------------------------");
                        System.out.println("Name: "+hotel.getName());
                        System.out.println("Hotel_ID: "+hotel.getHotelId());
                        System.out.println("Room Number: "+room.getRoomId());
                        System.out.println("Room Type: "+(room.isHaveAc()?"AC":"NON-AC"));
                        System.out.println("-----------------------------------");
                        room.setAvailable(false);
                        return;

                    }
                }
        }
    }
        System.out.println("No Room is Available");
    }

    public void giveFeedBack(String comment, int rating,int hotelId) {
        for(Hotel hotel:getHotels()){
            if (hotel.getHotelId()==hotelId){
                hotel.setFeedBack(new FeedBack(comment,rating));
                System.out.println("\nFeedBack Submitted\n");
                return;
            }

        }
    }
}
