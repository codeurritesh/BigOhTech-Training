package WhatsApp;

import java.util.UUID;

public class Message {
    private String messageId;
    private boolean isSeen;

    public Message(){
        messageId= UUID.randomUUID().toString();
        this.isSeen=false;
    }

    public String getMessageId() {
        return messageId;
    }

    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }

    public boolean isSeen() {
        return isSeen;
    }

    public void setSeen(boolean seen) {
        isSeen = seen;
    }
}
