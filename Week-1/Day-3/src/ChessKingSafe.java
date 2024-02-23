
//Write a method Boolean isKingSafe(int[][]chessBoard)
//        Returns true if king in the given chess board is safe from the given enemies otherwise false;
//        NOTE: Enemies are- Horse, Camel, Queen, Elephant only
//        Do not consider the colour case of the chess board for traversal of camel and all.

import java.util.ArrayList;

public class ChessKingSafe {
    /*
  MARK: Index Class for X,Y to Coordinates
  DESC: -Here we make it to store the Coordinates of the players.
        -Then we can easily accessible by Obj.x and Obj.y
        -Also Creating a parameterised Constructor to inertialise a pair
   */
    class index{
        int x;
        int y;
        public index(int x,int y){
            this.x=x;
            this.y=y;
        }
    }

    public static void main(String[] args) {
        //Enemies are Camel, Queen, Elephant only

        String chess[][]=   {{"","","","E","","","",""},
                            { "", "","","","","","",""},
                            { "", "","","K","","","",""},
                            { "","","","H","","","",""},
                            { "","","","","", "","",""},
                            { "", "","","","","","",""},
                            { "","","","","","","",""},
                            { "", "","Q","C","","","H","E"}};

        System.out.println("Is King Safe: "+isKingSafe(chess));
    }
 /*    MARK:- Is King Safe
       DESC: - This function is to check that king is safe by enemies like:
              - Horse
              - Camel
              - Queen
  */
    public static boolean isKingSafe(String chess[][]){
        // This function is to check that king is safe by enimies like Horse Camel Queen and Elephant or not
        ChessKingSafe obj=new ChessKingSafe();
        index kingIndex= obj.findIndexes("K",chess);
        boolean Elephant=isSafeByElephant(kingIndex.x,kingIndex.y,chess);
        boolean Camel=isSafeByCamel(kingIndex.x,kingIndex.y,chess);
        boolean Queen=isSafeByQueen(kingIndex.x,kingIndex.y,chess);
        boolean Horse=isSafeByHorse(kingIndex.x,kingIndex.y,chess);

        return Elephant && Camel && Queen && Horse;
    }

    /*    MARK:- Finding Players Indexes
          DESC: - This function is to find the indexes of the players
             - This function returns the pair of Indexes Player in Index Class format
             - Here we are giving the parameters Player and chessBoard
             - Players are in the format of 'C','H','K','Q','E' for Camel ,Horse ,King ,Queen ,Elephant Respectively
 */
    public index findIndexes(String player, String chess[][]){
        // This function is used to find index of players as provided in parameters
        for(int i=0;i<8;i++){
            for (int j = 0; j <8 ; j++) {
                if(chess[i][j].equals(player)){
                    return new index(i,j);
                }
            }
        }
        return new index(-1,-1);// It returns a pair of index contain x and y coordinates of that particular player

    }

    /*    MARK:- Checking that is king Safe by Elephant
          DESC: - We are checking that rows and columns of elephant is same of king or not
            - We are first finding the index pair of elephant and then finding the  index pair of king
            - Than we compare the both players indexes
            - If player row is same as kings row or column is same as kings column then return false that king is not safe;
 */
    public static boolean isSafeByElephant(int row,int col,String chess[][]){// This function is to check that king if safe by Elephant or Not
        ChessKingSafe obj=new ChessKingSafe();
       index elephantIndex=obj.findIndexes("E",chess);
        index KingIndex=obj.findIndexes("K",chess);

        if(isAnyBetween(elephantIndex,KingIndex,chess)){
            return true;
        }
       if(elephantIndex.x==row || elephantIndex.y==col){// Checking that row and col of elephant is same as king if YES then king is not safe

           return false;
       }
       return true;
    }

    /*   MARK:- Checking that is king Safe by Camel
         DESC: - We are checking that rows and columns of camel is same of king or not
           - We are first finding the index pair of elephant and then finding the  index pair of king
           - Than we compare the both players indexes
           - If absolute difference between rows and column of king is same as king, then return false that king is not safe;
*/
    public static boolean isSafeByCamel(int row,int col,String chess[][]){
        ChessKingSafe obj=new ChessKingSafe();
        index camelIndex=obj.findIndexes("C",chess);
        if(Math.abs(camelIndex.x-row) == Math.abs(camelIndex.y-col)){// Checking that Diagonals of Camel is same as king if YES then king is not safe
            return false;
        }
        return true;
    }

    /*  MARK:- Checking that is king Safe by Queen
        DESC: - We are checking that rows and columns of Queen is same of king or not
          - We are first finding the index pair of Queen and then finding the  index pair of king
          - Than we compare the both players indexes
          - If they are following the property of camel or elephant that king is not safe
*/
    public static boolean isSafeByQueen(int row,int col,String chess[][]){
        ChessKingSafe obj=new ChessKingSafe();
        index queenIndex=obj.findIndexes("Q",chess);
        // Checking that row and col of Queen is same as king is YES then king is not safe and Checking that Diagonals of Queen is same as king if YES then king is not safe
        if((queenIndex.x==row || queenIndex.y==col)||(Math.abs(queenIndex.x-row) == Math.abs(queenIndex.y-col))){
            return false;
        }
        return true;
    }

    /* MARK:- Checking that is king Safe by Horse
       DESC: - We are checking that rows and columns of Horse is same of king or not
       - We are first finding the index pair of Horse and then finding the  index pair of king
       - Than we compare the both players indexes
       - If the difference between the indexes of king and horse is 3 and not lie in the same row or column then king is safe
*/
    public static boolean isSafeByHorse(int row,int col,String chess[][]){
        // Checking that row and col of Horse is same as king is YES then king is not safe and Checking that is Horse is 3 box far from  king if YES then king is not safe
        ChessKingSafe obj=new ChessKingSafe();
        index horseIndex=obj.findIndexes("H",chess);
        if(horseIndex.x==row || horseIndex.y==col){
            return true;
        }
        if(Math.abs(horseIndex.x-row)+ Math.abs(horseIndex.y-col)==3)
            return false;

        return true;
    }

    /* MARK:- Checking that is anyone is between king and Player
       DESC: - We are checking that rows and columns of Player is same of king or not
       - We are first finding the index pair of All other players and then finding the index pair of king
       - Than we compare the both players indexes
       - If they lie in same row and column then king is safe
*/
    public static boolean isAnyBetween(index playerIndex,index kingIndex,String chess[][]){
        ChessKingSafe obj=new ChessKingSafe();
        ArrayList<index> allIndexes=new ArrayList<>();
        index CamelIndex= obj.findIndexes("C",chess);
        index HorseIndex= obj.findIndexes("H",chess);
        index QueenIndex= obj.findIndexes("Q",chess);
        index ElephantIndex= obj.findIndexes("E",chess);
        allIndexes.add(CamelIndex);
        allIndexes.add(HorseIndex);
        allIndexes.add(QueenIndex);
        allIndexes.add(ElephantIndex);

        if(playerIndex.x==kingIndex.x){

            for (int i = 0; i < allIndexes.size(); i++) {
                if(playerIndex.x==allIndexes.get(i).x){
                    if(playerIndex.y<allIndexes.get(i).y && allIndexes.get(i).y< kingIndex.y){
                        return true;
                    }
                }
            }
        }
        if(playerIndex.y== kingIndex.y){
            for (int i = 0; i < allIndexes.size(); i++) {
                if(playerIndex.y==allIndexes.get(i).y){
                    if(playerIndex.x<allIndexes.get(i).x && allIndexes.get(i).x< kingIndex.x){
                        return true;
                    }
                }
            }
        }
        return false;
    }



}
