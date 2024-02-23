package LibraryManagementSystem;

import java.util.ArrayList;
import java.util.HashMap;

public class Library {
    private String name;
    private ArrayList<Book>allBooks;
    private ArrayList<Member> subscribedMembers;
    private HashMap<BookType,Integer>collection;
    private Librarian librarian;
    private ArrayList<Transaction>bookIssued;
    private ArrayList<Transaction>bookReturnd;

    public Library(String name){
        this.name=name;
        this.collection=new HashMap<>();
        this.bookIssued=new ArrayList<>();
        this.bookReturnd=new ArrayList<>();
        this.subscribedMembers=new ArrayList<>();
        this.allBooks=new ArrayList<>();
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLibrarian(String librarianName){
        if(librarian!=null){
            System.out.println("Error: Already have a librarian");
            return;
        }
        librarian=new Librarian(librarianName);
    }

    public Librarian getLibrarian() {
        System.out.println("Librarian : "+librarian.getName());
        return librarian;
    }

    public void showDetails(){
        System.out.println("\n#################################");
        System.out.println("Library Name: "+ getName());
        System.out.println("Total Racks: "+collection.keySet().size());
        System.out.println("Total Books: "+ allBooks.size());
        System.out.println("Librarian : "+librarian.getName());
        System.out.println("Subscribed Members : "+subscribedMembers.size());
        System.out.println("#################################\n");
    }

    public HashMap<BookType, Integer> getCollection() {
            System.out.println("Books Collection: ");
            System.out.println("----------------------------------------------------------");
        for (BookType book:collection.keySet()){
            System.out.println("Title: "+book.getTitle());
            System.out.println("Author: "+book.getAuthor());
            System.out.println("Category: "+book.getCategory());
            System.out.println("Publish Date: "+book.getPublishDate());
            System.out.println("Stock count: "+collection.get(book));
            System.out.println("----------------------------------------------------------");

        }
        return collection;
    }
    public void addBookInLibrary(String bookTitle,String author,String category,String publishDate,int count){
        for (int i = 0; i < count; i++) {
            allBooks.add(new Book(bookTitle,author,category,publishDate,collection.size()+1,Integer.toString(allBooks.size()+i)));
        }
        collection.put(new BookType(bookTitle,author,category,publishDate),count);

        System.out.println(count+" Books of "+bookTitle+" Successfully Added");
    }


    public void searchBookByAuthor(String author){
        int count=0;
        for (Book book:allBooks){
            if(book.getAuthor()==author){
                count++;
            }
        }
        System.out.println(author+" Books Found with stock: "+count);
    }
    public void searchBookByTitle(String bookTitle){
        int count=0;
        for (Book book:allBooks){
            if(book.getTitle()==bookTitle){
                count++;
            }
        }
        System.out.println(bookTitle+" Books Found with stock: "+count);

    }
    public void searchBookByCategory(String category){
        int count=0;
        for (Book book:allBooks){
            if(book.getCategory()==category){
                count++;
            }
        }
        System.out.println(category+" Books Found with stock: "+count);

    }

    public void searchBookByPublishDate(String publishDate){
        int count=0;
        for (Book book:allBooks){
            if(book.getPublishDate()==publishDate){
                count++;
            }
        }
        System.out.println(publishDate+" Books Found with stock: "+count);

    }
    public void issueBook(String bookTitle,String author,String category,String publishDate,Member member,int date){
        if(member.getBookIssued().size()>=5){
            System.out.println("ERROR:Unable to issue book, Maximum issue limit crossed");
            return;
        }
        for (Book book:allBooks){
            if(book.getTitle().equals(bookTitle) && book.getAuthor().equals(author) && book.getCategory().equals(category) && book.getPublishDate().equals(publishDate)){
                System.out.println("\n---------------------------");
                System.out.println("This Book Available");
                Transaction transaction=new Transaction(book,member,date);
                transaction.showTransaction();
                this.bookIssued.add(transaction);
                member.getBookIssued().add(book);
//                BookType bookType=new BookType(bookTitle,author,category,publishDate);
//                collection.put(bookType,collection.get(bookType)-1);
                System.out.println(book.getTitle()+" Book issued successfully\n\n");
                return;
            }
        }
        System.out.println("Book Not Available in Library, Try Another Book");
    }

    public void returnBook(String bookId,Member member,int returnDate){
        Book returnBook;
        for(Transaction transaction:bookIssued){
            if (transaction.getBook().getUiNumber().equals(bookId)){
                int issuedDate=transaction.getDate();
                bookIssued.remove(transaction);
                Transaction returnTransaction=new Transaction(transaction.getBook(),member,returnDate);
                bookReturnd.add(returnTransaction);
//                BookType bookType=new BookType(transaction.getBook().title,transaction.getBook().author,transaction.getBook().category,transaction.getBook().publishDate);
//                collection.put(bookType,collection.get(bookType)-1);
                System.out.println("Book returned Successfully");
                if(returnDate-issuedDate<=10){
                    System.out.println("Charges: Free");
                }else{
                    System.out.println("Charges: "+((returnDate-issuedDate-10)*10));
                }
                return;
            }
        }

        System.out.println("Book Unable to return give correct Informations");
    }
    public void subscribeMember(Member member){
        if (this.subscribedMembers.contains(member)){
            System.out.println("ERROR: Already a Subscribed Member");
            return;
        }
        this.subscribedMembers.add(member);
        System.out.println("Member Subscribed Successfully");


    }
    public void removeSubscribeMember(Member member){
        if (!this.subscribedMembers.contains(member)){
            System.out.println("ERROR: This Member Not found in subscribed Members");
            return;
        }
        this.subscribedMembers.remove(member);
        System.out.println("Member UnSubscribed Successfully");


    }
//    public void renewBook(member,){
//
//    }


}
