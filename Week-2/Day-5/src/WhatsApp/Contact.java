package WhatsApp;

import java.util.ArrayList;

public class Contact extends Person {
    private ArrayList<Status>statuses;

    public Contact(String name,String phoneNumber,String displayPicture)
    {
        setName(name);
        setDisplayPicture(displayPicture);
        setPhoneNumber(phoneNumber);
        this.statuses=new ArrayList<>();
    }
    public ArrayList<Status> getStatuses() {
        return statuses;
    }

    public void setStatuses(ArrayList<Status> statuses) {
        this.statuses = statuses;
    }

}
