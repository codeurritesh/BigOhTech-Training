package LibraryManagementSystem2;


// Interface for managing books
interface ManageBooks {
    void addBook(Book book);
    void removeBook(Book book);
    Book findBook(String title);
    int countBooks();
}