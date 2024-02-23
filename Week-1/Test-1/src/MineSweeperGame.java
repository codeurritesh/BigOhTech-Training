import java.util.Scanner;
// Question Make Mine Sweeper Game on console in nxn with n numbers of Bombs

public class MineSweeperGame {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.print("Enter the dimension n: ");
        int n=s.nextInt();
        if(n<=0){
            System.out.println("⚠\uFE0F⚠\uFE0F INVALID DIMENSION!! ⚠\uFE0F⚠\uFE0F");
            return;
        }
        String land[][]=new String[n][n];
        playGame(land);
    }
    /*
    MARK:  Play Game
    DESC: - This method we are just setting up the necessary requirements
          - We are just Passing the whole Land Matrix in parameters
          - First we are calling the setBombRandomly function to set randopm bombs
          - Then we are Stating the Game
     */
    public static void playGame(String land[][]){
        setBombRandomly(land);
        System.out.println("BOMBS SET SUCCESSFULLY!!");
        startGame(land);
    }

    /*
  MARK: Start Game
  DESC: - This method is just used to Start the game
        - Here we are just passing the land matrix as the parameters
        - FirstLy we are taking the input form the user number of mines
        - Then we are checking that the number of mines should not be less than 0 or should not be more than there possible limits
        - Then we are just taking the input Coordinates as X,Y and checking that is there is any bomb is 'YES' then return GAME OVER
        - If there is Mine Already places then we give that Coordinates already used
        - Meanwhile we are also checking the Coordinates that x,y is valid or not and possible or not
        - If every thing is fine then we add MINE to that Index
        - This is counting that how many MINES Players has placed
        - If the number of Mines is equal to there MinesTotal then Player WINS
   */
    public static void startGame(String land[][]){
        Scanner s=new Scanner(System.in);
        System.out.print("Enter the number of Mines: ");
        int totalMines=s.nextInt();//Total number of mines

        // Vefifying the Limits of totalMines given by user
        if(totalMines>(land.length*land[0].length)-land.length || totalMines<=0 ){
            System.out.println();
            System.out.println("###########################################################");
            System.out.println("⚠\uFE0F⚠\uFE0F INVALID NUMBER OF MINES!!, TRY AGAIN ⚠\uFE0F⚠\uFE0F");
            System.out.println("###########################################################");
            System.out.println();
            startGame(land);
        }
        while(totalMines>0){
            //Taking Coordinates from the user
            System.out.print("Enter Mine coordinates (X,Y): ");
            int x=s.nextInt();
            int y=s.nextInt();
            //Verifying the Coordinates
            if(x<0 || x>=land.length || y<0 || y>= land[0].length)
            {
                System.out.println("###################################################");
                System.out.println(" ⚠\uFE0F⚠\uFE0F INVALID COORDINATES!!, TRY AGAIN ⚠\uFE0F⚠\uFE0F");
                System.out.println("###################################################");
                System.out.println();
//                startGame(land);
                continue;
            }
            // If index already have MINE then Show warming and retake input
            if(land[x][y]=="MINE")
            {
                System.out.println("###################################################");
                System.out.println(" ⚠\uFE0F⚠\uFE0F COORDINATES ALREADY USED!!, TRY AGAIN ⚠\uFE0F⚠\uFE0F");
                System.out.println("###################################################");
                System.out.println();
                startGame(land);
            }
            // If index having BOMB then it simply mens that BOMB found and returning the GAME OVER
            if(land[x][y]=="BOMB"){
                System.out.println();
                System.out.println("#####################################");
                System.out.println("\uD83D\uDE2D \uD83D\uDE2D GAME OVER, BOMB BLAST! \uD83D\uDE2D \uD83D\uDE2D");
                System.out.println("#####################################");

                printBoard(land);
                System.exit(0);
//                return;
            }else{
                land[x][y]="MINE";
                System.out.println("MINE Set Successfully \uD83C\uDF89 \uD83C\uDF89");

                totalMines--;// Counting the number of mines Correctly Placed
            }
        }
        // If all mines are set successfully then return 'YOU WINS'
        if(totalMines==0){
            System.out.println();
            System.out.println("#################################");
            System.out.println("\uD83C\uDF89 \uD83C\uDF89 YOU WINS!! \uD83C\uDF89 \uD83C\uDF89");
            System.out.println("#################################");
            printBoard(land);

            System.exit(0);
        }
    }

    /*
  MARK: Setting random Bombs
  DESC: - This method is just setting the random bombs at random indexs
        - Number of bombs should be the length of the land we have
        - We are just findind the random values of X,Y and checking if that index already have bomb then continue else add BOMB at that index
        - Meanwhile we are also counting the Number of BOMB we set
   */
    public static void setBombRandomly(String land[][]){
        int countBomb= 1;
    //    printBoard(land);
        while(countBomb<= land.length){
            // Finding the random Indexes
            int x=getRandomIndex(land.length);
            int y=getRandomIndex(land.length);
            if(land[x][y]=="BOMB"){
                continue;
            }
            else{
                land[x][y]="BOMB";
                countBomb++; // Counting the number of bombs sets
            }
        }

    }

    /*
  MARK: Getting the random Indexes by just providing the limit
  DESC: - Here we are just calling the MATH.random function to find out the random values
        - Then we are just ,managing the limit of random value and return it
   */
    public static int getRandomIndex(int n){
        int randomValue=(int)(Math.random()*n)+0;
        return randomValue;
    }

    /*
  MARK: Printing Random Values
  DESC: - This method is just used to Print whole LAND
        - We are just using the two pointers approach to print this Land
   */
    public static void  printBoard(String arr[][]){
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length ; j++) {
                if(arr[i][j]=="BOMB" || arr[i][j]=="MINE")
                System.out.print(arr[i][j]+" ");
                else
                    System.out.print("LAND"+" ");// replacing NULL with LAND
            }
            System.out.println();
        }
        System.out.println();
    }
}
