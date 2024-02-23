package LibraryManagementSystem2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Library class implementing BookManager and UserManager
class Library implements ManageBooks, ManageUser {
    private List<Book> books;
    private Map<User, List<Transaction>> database;

    private List<Book> reservedBooks;

    public Library() {
        this.books = new ArrayList<>();
        this.database = new HashMap<>();
    }

    @Override
    public void addBook(Book book) {
        if (reservedBooks!=null && reservedBooks.contains(book)){
            System.out.println(book.getTitle()+" Book is now Under Stock");
            reservedBooks.remove(book);
        }
        books.add(book);
    }

    @Override
    public void removeBook(Book book) {
        books.remove(book);
    }

    @Override
    public Book findBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equals(title)) {
                return book;
            }
        }
        return null;
    }

    @Override
    public int countBooks() {
        return books.size();
    }

    @Override
    public void issueBook(User user, Book book,int date) {
//        userBooks.computeIfAbsent(user, k -> new ArrayList<>()).add(book);
        if(database.containsKey(user)){
            database.get(user).add(new Transaction(book,date));
            database.put(user, database.get(user));
        }else {
            List<Transaction> newList=new ArrayList<>();
            newList.add(new Transaction(book,date));
            database.put(user,newList);
        }
        books.remove(book);
        System.out.println("Book Issued Successfully");
    }

    @Override
    public void returnBook(User user, Book book,int returndate) {
        for(Transaction transaction: database.get(user)){
            if (transaction.getBook()==book)
            {
                System.out.println("Book Returned Successfully");
                books.add(book);
                int issueDate=transaction.getDate();
                database.remove(transaction);
                if(returndate-issueDate<=10){
                    System.out.println("Charges: Free");
                }else{
                    System.out.println("Charges: "+ ((returndate-issueDate)-10)*10);
                }
                return;
            }
        }
        System.out.println("Invalid Information, Record Not found");

    }

    @Override
    public void renewBook(User user, Book book,int renewdate) {
        for(Transaction transaction: database.get(user)){
            if (transaction.getBook()==book)
            {
                System.out.println("Book Renew Successfully");
                books.add(book);
                transaction.setDate(renewdate);
                return;
            }
        }
        System.out.println("Invalid Information, Record Not found");    }
    @Override
    public void reserveBook(User user,Book book){
        if(books.contains(book)){
            System.out.println("This Book is under Stock No need to reserve");
            return;
        }
        if (reservedBooks==null){
            reservedBooks=new ArrayList<>();
            reservedBooks.add(book);
            System.out.println("Book Reserved Successfully");
            return;
        }
        reservedBooks.add(book);
        System.out.println("Book Reserved Successfully");
        return;

    }
}
