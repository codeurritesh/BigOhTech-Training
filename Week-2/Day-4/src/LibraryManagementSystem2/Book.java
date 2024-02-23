package LibraryManagementSystem2;


// Book class
class Book {
    private String title;
    private String author;
    private String category;
    private String publishDate;

    // Getters and setters

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }

    public Book(String title, String author,String category,String publishDate) {
        this.title = title;
        this.author = author;
        this.category=category;
        this.publishDate=publishDate;
    }


    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }
}
