package WhatsApp;

public class Whatsapp {
    private UserManager userManager;
    private ChatManager chatManager;
    private StatusManager statusManager;

    public Whatsapp(){
        this.userManager=new UserManager();
        this.chatManager=new ChatManager();
        this.statusManager=new StatusManager();
    }
    // create user

    public void createUser(int userid,String name,String number){
        this.userManager.createUser(userid,name,number);
    }
    public void removeUser(int userid){
        this.userManager.removeUser(userid);
    }
    public void showAllUsers(){
        this.userManager.showAllUsers();
    }
    public void sendMessage(Message message,Contact contact){
        chatManager.sendMessage(message,contact);
    }
    public void recieveMessage(Message message,Contact contact){
        chatManager.recieveMessage(message,contact);
    }

    public void sendStatus(Message status){
        if (status instanceof Audio || status instanceof Video){
            System.out.println("Incorrct Format for status, Please Choose Text or Image type");
            return;
        }
        statusManager.shareStatus(status);
    }


    public void recieveStatuses() {
        statusManager.showStatus();
    }

    public void showChats() {
        chatManager.showChat();
    }
}
