package HotelManagementSystem;

import java.util.ArrayList;
/**
 * MARK: Hotel Class
 * DESC: Represents a hotel in the Hotel Management System, encapsulating information such as hotel ID, name, location, features, rooms, agent, and feedback.
 *
 * MARK: Constructor - Parameterized
 * DESC: Initializes a Hotel object with specified details.
 *       Creates rooms based on the totalRooms parameter and associates an agent with the hotel.
 *
 * MARK: Getter and Setter Methods
 * DESC: Provide access to and modification of the hotel's attributes, including hotel ID, name, location, features, rooms, agent, and feedback.
 *
 * MARK: Getter and Setter Methods for Feedback
 * DESC: Allow retrieval and assignment of feedback associated with the hotel.
 */

public class Hotel {
    private int hotelId;
    private String name;
    private ArrayList<Room> rooms;
    private String location;
    private Feature feature;
    private Agent agent;
    private FeedBack feedBack;

    public FeedBack getFeedBack() {
        return feedBack;
    }

    public void setFeedBack(FeedBack feedBack) {
        this.feedBack = feedBack;
    }

    /*
         MARK: Constructor - Parameterized
         DESC: Initializes a Hotel object with specified details.
     */
    public Hotel(int hotelId, String name, String location, Feature feature, int totalRooms, boolean haveAc, Agent agent){
        this.hotelId=hotelId;
        this.name=name;
        this.location=location;
        this.feature=feature;
        this.rooms=new ArrayList<>();
        this.agent=agent;
        this.feedBack=new FeedBack();
        for (int i = 0; i < totalRooms; i++) {
            this.rooms.add(new Room(i+1,haveAc));
        }
    }

    public Agent getAgent() {
        return agent;
    }

    public void setAgent(Agent agent) {
        this.agent = agent;
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Room> getRooms() {
        return rooms;
    }

    public void setRooms(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Feature getFeature() {
        return feature;
    }

    public void setFeature(Feature feature) {
        this.feature = feature;
    }


}
