package HotelManagementSystem;

/**
 * MARK: Feedback Class
 * DESC: Represents user feedback in the Hotel Management System, storing comments and ratings.
 */

public class FeedBack {
    private String comment;
    private int rating;

    // MARK: Default Constructor
    // DESC: Creates an empty Feedback object.
    public FeedBack() {
    }

    // MARK: Constructor - Parameterized
    // DESC: Initializes a Feedback object with specified comment and rating.
    public FeedBack(String comment, int rating){
        this.comment=comment;
        this.rating=rating;
    }

    // MARK: Getter Method for Comment
    // DESC: Retrieves the comment provided in the feedback.
    public String getComment() {
        return comment;
    }

    // MARK: Setter Method for Comment
    // DESC: Sets the comment for the feedback.
    public void setComment(String comment) {
        this.comment = comment;
    }

    // MARK: Getter Method for Rating
    // DESC: Retrieves the rating provided in the feedback.
    public int getRating() {
        return rating;
    }

    // MARK: Setter Method for Rating
    // DESC: Sets the rating for the feedback.
    public void setRating(int rating) {
        this.rating = rating;
    }
}
