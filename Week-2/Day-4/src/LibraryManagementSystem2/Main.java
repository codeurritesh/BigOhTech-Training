package LibraryManagementSystem2;

public class Main {
    public static void main(String[] args) {
        // Create a library
        Library library = new Library();

        // Add books to the library
        Book book1 = new Book("Book-1", "Ritesh","CSE","12-Feb-2024");
        Book book3 = new Book("Book-1", "Rahul","CSE","12-Feb-2024");
        Book book2 = new Book("Book-1", "Shiva","CSE","12-Feb-2024");
        library.addBook(book1);
        library.addBook(book2);

        // Add users to the library
        User user1 = new User("XYZ", 1);
        User user2 = new User("PQR", 2);

        // Issue and return books
        library.issueBook(user1, book1,1);
        library.issueBook(user2, book2,2);
        library.reserveBook(user1,book1);
        library.addBook(book1);

        library.renewBook(user1,book1,5);
        library.returnBook(user1, book1,16);

        // Find a book in the library
        Book foundBook = library.findBook("Book-1");
        if (foundBook != null) {
            System.out.println("Book found: " + foundBook.getTitle() + " by " + foundBook.getAuthor());
        } else {
            System.out.println("Book not found.");
        }

        // Count the number of books in the library
        int bookCount = library.countBooks();
        System.out.println("Number of books in the library: " + bookCount);
    }
}
