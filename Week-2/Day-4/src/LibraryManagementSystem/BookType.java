package LibraryManagementSystem;

import java.util.ArrayList;

public class BookType {
    int rackNumber;
    String title;
    String author;
    String category;
    String publishDate;

    public BookType(){

    }
    public int getRackNumber() {
        return rackNumber;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getCategory() {
        return category;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public BookType(String bookTitle, String author, String category, String publishDate){
        this.title=bookTitle;
        this.author=author;
        this.category=category;
        this.publishDate =publishDate;
//        this.rackNumber= rackNumber;
    }
    public void showBook(){
        System.out.println("-------------------------------------");
        System.out.println("Title: "+this.title);
        System.out.println("Author: "+this.author);
        System.out.println("Category "+this.category);
        System.out.println("Pubilsh Date: "+this.publishDate);
        System.out.println("-------------------------------------");
    }
}
