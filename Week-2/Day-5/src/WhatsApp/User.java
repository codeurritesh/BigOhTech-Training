package WhatsApp;

import java.util.ArrayList;
import java.util.HashMap;

public class User extends Person {
    private int userId;
    private ArrayList<Message>statuses;
    private ArrayList<Contact>contacts;
    private HashMap<Contact,ArrayList<Message>>chats;

    public User(int userId,String name,String number){
        this.userId=userId;
        setName(name);
        setPhoneNumber(number);
        this.contacts=new ArrayList<>();
        this.chats=new HashMap<>();
        this.statuses=new ArrayList<>();
    }
    public User(){
        this.contacts=new ArrayList<>();
        this.chats=new HashMap<>();
        this.statuses=new ArrayList<>();
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
    public ArrayList<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(ArrayList<Contact> contacts) {
        this.contacts = contacts;
    }

    public HashMap<Contact, ArrayList<Message>> getChats() {
        return chats;
    }

    public void addContact(Contact contact){
        contacts.add(contact);
    }
    public void deleteContact(Contact contact){
        contacts.remove(contact);
    }
    public void updateStatus(Message message){
        this.statuses.add(message);
    }


}
