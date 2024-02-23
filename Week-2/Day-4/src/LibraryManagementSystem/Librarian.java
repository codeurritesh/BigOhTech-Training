package LibraryManagementSystem;

/* MARK:- Librarian
   DESC: - Represents a librarian with a name.
 - Constructor:
      - Librarian: Initializes a Librarian instance with the provided name.

   - Properties:
      - name: Represents the name of the librarian.
*/

public class Librarian {
    private String name;
    public Librarian(String name){
        this.name=name;
    }

    public String getName() {
        return name;
    }
}
