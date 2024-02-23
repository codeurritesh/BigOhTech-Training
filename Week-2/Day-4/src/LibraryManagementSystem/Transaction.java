package LibraryManagementSystem;

public class Transaction {
private Book book;
private Member member;
private int date;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }
    public Transaction(Book book,Member member,int date){
    this.book=book;
    this.member=member;
    this.date=date;
    }
    public void showTransaction(){
        System.out.println("---------------------------");
        System.out.println("Book Name: "+book.getTitle());
        System.out.println("Book ID: "+book.getUiNumber());
        System.out.println("Member name: "+member.getName());
        System.out.println("Date: "+this.date);
        System.out.println("---------------------------");
    }
}
