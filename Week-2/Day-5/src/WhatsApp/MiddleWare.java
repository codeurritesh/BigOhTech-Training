package WhatsApp;

import java.util.ArrayList;
import java.util.HashMap;

public class MiddleWare {
    private User user;
    public MiddleWare(){
        this.user=new User();
    }
    public void sendMessage(Message message,Contact contact){
//        user.setChats(message,contact);
        if (user.getChats().containsKey(contact)) {
            ArrayList<Message> oldChats=user.getChats().get(contact);
            oldChats.add(message);
            user.getChats().put(contact, oldChats);
            System.out.println("Message Sent");
        }else{
            ArrayList<Message>list=new ArrayList<>();
            list.add(message);
            user.getChats().put(contact,list);
        }
        System.out.println(user.getChats());
    }
    public void recieveMessage(Message message,Contact contact){
        if (user.getChats().containsKey(contact)) {
            ArrayList<Message> oldChats=user.getChats().get(contact);
            oldChats.add(message);
            user.getChats().put(contact, oldChats);
            System.out.println("Message Sent");
        }else{
            ArrayList<Message>list=new ArrayList<>();
            list.add(message);
            user.getChats().put(contact,list);
        }
        System.out.println(user.getChats());
    }
    public void deleteContact(Contact contact){

    }

    public void sendStatus(Message status) {
        user.updateStatus(status);
        System.out.println("Status Set Successfully");
    }

    public void recieveStatuses(Message status) {
//        user.getStatuses().add(status);
        System.out.println("Status recieved Successfully");
    }

    public void showStatus() {
        System.out.println("All Statuses are: ");
        int count=0;
    for(Contact contact:user.getContacts()){
        System.out.println(contact.getStatuses());
        count++;
        }
    if(count==0){
        System.out.println("No status Found");
    }
    }

    public void showChats() {
        System.out.println("SHOW CHAT:");
        System.out.println(user.getChats());
        for (Contact contact: user.getChats().keySet()){
            System.out.println("Chats of "+contact.getName());
            for (Message message:user.getChats().get(contact)){
                System.out.println(message.getClass());
            }
        }
    }
}
