package LibraryManagementSystem;

import java.util.ArrayList;


public class Book extends BookType {
    private String uiNumber;
    private ArrayList<Transaction>allBookTransactions;

    public String getUiNumber() {
        return uiNumber;
    }



    public ArrayList<Transaction> getAllBookTransactions() {
        return allBookTransactions;
    }

    public Book(String bookTitle, String author, String category, String publishDate,int rackNumber,String uniqueID){
//        this.uiNumber = UUID.randomUUID().toString().substring(0,10);
        this.uiNumber=uniqueID;
        this.title=bookTitle;
        this.author=author;
        this.category=category;
        this.publishDate =publishDate;
        this.rackNumber= rackNumber;

    }
    public void showBook(){
        System.out.println("-------------------------------------");
        System.out.println("Unique Identification ID: "+this.uiNumber);
        System.out.println("Title: "+this.title);
        System.out.println("Author: "+this.author);
        System.out.println("Category "+this.category);
        System.out.println("Pubilsh Date: "+this.publishDate);
        System.out.println("-------------------------------------");
    }
}
