package LibraryManagementSystem;

import java.util.ArrayList;

public class Member {
    private String name;
    private ArrayList<Book>bookIssued;

    public String getName() {
        return name;
    }

    public ArrayList<Book> getBookIssued() {
        return bookIssued;
    }


    public Member(String name){
        this.name=name;
        bookIssued=new ArrayList<>();
    }
}
