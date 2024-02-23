package LibraryManagementSystem;

public class Main {
    public static void main(String[] args) {
        Library library=new Library("Big Oh library");
        library.setLibrarian("Ritesh verma");
//        library.setLibrarian("Ritesh");
//        library.getLibrarian();
        library.showDetails();
        library.getCollection();
        library.addBookInLibrary("MERN Stack","Developer","CSE","11 Feb 2023",50);
        library.addBookInLibrary("Data Structure","Leetcode","CSE","10 Feb 2023",75);
        library.addBookInLibrary("OOPS","Leetcode","System Design","16 Feb 2023",10);

        library.showDetails();
        library.getCollection();
        library.searchBookByTitle("MERN Stack");
        library.searchBookByAuthor("Leetcode");
        library.searchBookByCategory("CSE");
        library.searchBookByPublishDate("16 Feb 2023");
        Member member=new Member("Shiva Agrawal");
        library.issueBook("MERN Stack","Developer","CSE","11 Feb 2023",member,2);
        library.issueBook("MERN Stack","Developer","CSE","11 Feb 2023",member,2);
        library.issueBook("Data Structure","Leetcode","CSE","10 Feb 2023",member,2);
        library.issueBook("MERN Stack","Developer","CSE","11 Feb 2023",member,2);
        library.issueBook("MERN Stack","Developer","CSE","11 Feb 2023",member,2);
        library.issueBook("MERN Stack","Developer","CSE","11 Feb 2023",member,2);
        library.subscribeMember(member);
        library.removeSubscribeMember(member);
//member.getName();
        library.returnBook("0",member,14);
        library.returnBook("50",member,14);
//        library.renewBook()



        library.showDetails();
    }
}
