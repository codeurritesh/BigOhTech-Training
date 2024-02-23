package ValentineDay;

public class Main {
    /*
        MARK: Main Function
        DESC: - This is the Main function from where we are getting started
              - Here we are using the middleWare to communicate between Role and Bricks data
              -
     */
    public static void main(String[] args) {
        MiddleWare middleWare=new MiddleWare();
        Role user1=new User("Ritesh");
        Role user2=new User("Rahul");
        Role admin=new Admin("BIG OH");
        Location l1=new Location("India","Mathura",101);
        Location l2=new Location("America","Mathura",111);
        middleWare.addBrick("Brick-1",user1,l1);
        middleWare.addBrick("Brick-1",user1,l1);
        middleWare.addCommentToBrick("Nice Brick",user1,l1);
        middleWare.deleteBrick(admin,l1);
        middleWare.readBrick(user2,l1);
        middleWare.writeBrick(user2,l1,"New Message");
        middleWare.readBrick(user1,l1);

    }
}
