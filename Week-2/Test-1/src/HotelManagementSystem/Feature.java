package HotelManagementSystem;

/**
 * MARK: Feature Class
 * DESC: Represents the features of a hotel, including the availability of AC rooms, parking, and a restaurant.
 */
public class Feature {
    private boolean haveAcRooms;
    private boolean havePraking;
    private boolean haveRestaurant;

    // MARK: Constructor - Parameterized
    // DESC: Initializes a Feature object with specified details about the hotel features.
    public Feature(boolean haveAcRooms,boolean havePraking, boolean haveRestaurant){
        this.haveAcRooms=haveAcRooms;
        this.havePraking=havePraking;
        this.haveRestaurant=haveRestaurant;
    }

    // MARK: Getter Method for AC Rooms
    // DESC: Retrieves the availability status of AC rooms.
    public boolean isHaveAcRooms() {
        return haveAcRooms;
    }

    // MARK: Setter Method for AC Rooms
    // DESC: Sets the availability status of AC rooms.
    public void setHaveAcRooms(boolean haveAcRooms) {
        this.haveAcRooms = haveAcRooms;
    }

    // MARK: Getter Method for Parking
    // DESC: Retrieves the availability status of parking facilities.
    public boolean isHavePraking() {
        return havePraking;
    }

    // MARK: Setter Method for Parking
    // DESC: Sets the availability status of parking facilities.
    public void setHavePraking(boolean havePraking) {
        this.havePraking = havePraking;
    }

    // MARK: Getter Method for Restaurant
    // DESC: Retrieves the availability status of a restaurant in the hotel.
    public boolean isHaveRestaurant() {
        return haveRestaurant;
    }

    // MARK: Setter Method for Restaurant
    // DESC: Sets the availability status of a restaurant in the hotel.
    public void setHaveRestaurant(boolean haveRestaurant) {
        this.haveRestaurant = haveRestaurant;
    }
}
