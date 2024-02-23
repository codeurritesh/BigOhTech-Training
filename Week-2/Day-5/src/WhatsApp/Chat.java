package WhatsApp;

import java.util.ArrayList;

public class Chat {
    private int chatId;
    private ArrayList<Message>messages;

    public int getChatId() {
        return chatId;
    }

    public void setChatId(int chatId) {
        this.chatId = chatId;
    }

    public ArrayList<Message> getMessages() {
        return messages;
    }

    public void setMessages(ArrayList<Message> messages) {
        this.messages = messages;
    }
}
