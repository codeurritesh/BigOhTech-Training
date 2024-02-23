package LibraryManagementSystem2;

// Interface for managing users
interface ManageUser {
    void issueBook(User user, Book book,int date);
    void returnBook(User user, Book book,int date);
    void renewBook(User user, Book book,int date);
    void reserveBook(User user, Book book);
}
