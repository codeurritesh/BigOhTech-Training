package ValentineDay;

Copy code
/* MARK:- Location
   DESC: - Represents a location with information such as country, city, wall, and brick ID.
 - Properties:
      - country: Represents the country associated with the location.
      - city: Represents the city associated with the location.
      - wall: Represents the wall associated with the location (default value is 0).
      - brickId: Represents the brick ID associated with the location.
*/

public class Location {
    String country;
    String city;
    int wall;
    int brickId;

    /* MARK:- Location (Constructor)
   DESC: - Initializes a Location instance with the provided country, city, brick ID, and default values for wall.
*/
public Location(String country,String city,int brickId){
        this.country=country;
        this.city=city;
        this.wall=0;
        this.brickId=brickId;
    }
}
