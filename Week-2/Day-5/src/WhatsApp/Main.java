package WhatsApp;

/*
 Question:  -Create a whatsApp as following
            -Users have contacts and can chat with any contact
            -Messaging in text audio and video
            -Users can see the status of all the contacts
            -Users can post status
            -Status can be text and image
 */

public class Main {
    /*
            MARK: Main Method
            DESC: - This is the main Method from where are Actully runnig the program
                  - First we are creating the Object of Whatsapp
                  - Then there is the function to Create new User
                  - Here is also one method that is used to Remove user
                  - There is also a function that is used to show all the users
                  - Then we are sending the mess in the Text, Audio, Video, Image format
                  - We are also checking the messing Recieving process in this
                  - There is also a Function to sendStatus and to Check All recieved Ststuses
                  - There is also the method that is used to Show all the Chats or that user
     */
    public static void main(String[] args) {
        // Creating the Whatsapp Object
        Whatsapp whatsapp=new Whatsapp();

        // Creating new USer with this name and Number
        whatsapp.createUser(1,"Ritesh verma","7983137015");

//        whatsapp.removeUser(1);

        // Showing All the User Details
        whatsapp.showAllUsers();

        // Sending message to given contact by that user
        whatsapp.sendMessage(new Text(),new Contact("Rahul","7455946673","DP_URL"));
        whatsapp.sendMessage(new Audio(),new Contact("Prashant","7427364536","DP_URL"));

        // Recieving the message from the contact
        whatsapp.recieveMessage(new Image(),new Contact("Prashant","7427364536","DP_URL"));

//        whatsapp.sendStatus(new Audio());

        // Sending the Status in Text format
        whatsapp.sendStatus(new Text());

        // Recieving the Statuses of all other contacts
        whatsapp.recieveStatuses();

        // Showing all the chats
        whatsapp.showChats();
    }
}
