package WhatsApp;

import java.util.ArrayList;

public class UserManager {
    private ArrayList<User>allUsers;
    public void createUser(int userid,String name,String number){
        this.allUsers.add(new User(userid,name,number));
        System.out.println("User Added Successfully");
    }
    public void removeUser(int userid){
        User userToBeDeleted = null;
        for (User user:allUsers){
            if(user.getUserId()==userid)
                userToBeDeleted=user;
        }
        allUsers.remove(userToBeDeleted);
        System.out.println("User Removed Successfully");
    }
    public void showAllUsers(){
        if(allUsers.size()==0){
            System.out.println("No User Found");
            return;
        }
        for (User user:allUsers){
            System.out.println("##############################");
            System.out.println("User_Id: "+user.getUserId());
            System.out.println("Name: "+user.getName());
            System.out.println("Phone Number: "+user.getPhoneNumber());
            System.out.println("##############################");

        }
    }
    public UserManager(){
        this.allUsers=new ArrayList<>();
    }
}
