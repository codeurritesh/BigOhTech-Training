package HotelManagementSystem;

/**
 * MARK: Room Class
 * DESC: Represents a room in a hotel in the Hotel Management System.
 */
public class Room {
    private int roomId;
    private boolean isAvailable;
    private boolean haveAc;

    // MARK: Constructor - Parameterized
    // DESC: Initializes a Room object with specified details such as room ID and AC availability.
    public Room(int roomId,boolean haveAc){
        this.roomId=roomId;
        this.haveAc=haveAc;
        this.isAvailable=true;
    }

    // MARK: Getter and Setter Methods for AC Availability
    // DESC: Provide access to and modification of the room's AC availability.
    public boolean isHaveAc() {
        return haveAc;
    }

    public void setHaveAc(boolean haveAc) {
        this.haveAc = haveAc;
    }

    // MARK: Getter and Setter Methods for Room ID
    // DESC: Provide access to and modification of the room's ID.
    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    // MARK: Getter and Setter Methods for Availability
    // DESC: Provide access to and modification of the room's availability status.
    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}
