package WhatsApp;

public class StatusManager {
    private MiddleWare middleWare;
    public void showStatus(){
        middleWare.showStatus();
    }
    public void shareStatus(Message status){
//        middleWare.sendStatus(status);
        middleWare.sendStatus(status);
    }
    public void recieveStatus(Message status){
        middleWare.recieveStatuses(status);
    }

    public StatusManager(){
        middleWare=new MiddleWare();
    }
}
