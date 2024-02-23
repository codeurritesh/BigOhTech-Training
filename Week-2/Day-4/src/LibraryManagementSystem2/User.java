package LibraryManagementSystem2;

// User class
class User {
    private String name;
    private int userId;

    public User(String name, int userId) {
        this.name = name;
        this.userId = userId;
    }

    // Getters and setters

    public String getName() {
        return name;
    }

    public int getUserId() {
        return userId;
    }
}
