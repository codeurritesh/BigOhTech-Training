package LibraryManagementSystem2;

public class Transaction {
    private Book book;
    private int date;
    Transaction(Book book,int date){
        this.book=book;
        this.date=date;
    }

    public Book getBook() {
        return book;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getDate() {
        return date;
    }
}
