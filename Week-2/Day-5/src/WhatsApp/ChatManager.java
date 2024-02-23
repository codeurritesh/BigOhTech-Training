package WhatsApp;

public class ChatManager {
    private MiddleWare middleWare;

    public void sendMessage(Message message,Contact contact){
        middleWare.sendMessage(message,contact);
        System.out.println("Message Sent to "+contact.getName());

    }
    public void recieveMessage(Message message,Contact contact){
        middleWare.recieveMessage(message,contact);
        System.out.println("Message Recived from "+contact.getName());
    }
    public void showChat(){
        middleWare.showChats();
    }
    public void deleteChat(){

    }
    public ChatManager(){
        this.middleWare=new MiddleWare();
    }
}
