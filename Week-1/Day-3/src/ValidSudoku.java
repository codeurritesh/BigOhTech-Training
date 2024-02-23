
//i) Write a method Boolean isValidSudoku(int[][]Sudoku)
//        Returns true if the given Sudoku is correctly arranged otherwise false
//        Write a method Boolean isValidSudoku(int[][]Sudoku)Returns true if the given Sudoku is correctly arranged otherwise false
//        Determine if a 9 x 9 The Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//        Each row must contain the digits 1-9 without repetition.
//        Each column must contain the digits 1-9 without repetition.
//        Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//        Example :
//        Input: board =
//        [["5","3",".",".","7",".",".",".","."]
//        ,["6",".",".","1","9","5",".",".","."]
//        ,[".","9","8",".",".",".",".","6","."]
//        ,["8",".",".",".","6",".",".",".","3"]
//        ,["4",".",".","8",".","3",".",".","1"]
//        ,["7",".",".",".","2",".",".",".","6"]
//        ,[".","6",".",".",".",".","2","8","."]
//        ,[".",".",".","4","1","9",".",".","5"]
//        ,[".",".",".",".","8",".",".","7","9"]]
//        Output: true
//        Input: board =
//        [["8","3",".",".","7",".",".",".","."]
//        ,["6",".",".","1","9","5",".",".","."]
//        ,[".","9","8",".",".",".",".","6","."]
//        ,["8",".",".",".","6",".",".",".","3"]
//        ,["4",".",".","8",".","3",".",".","1"]
//        ,["7",".",".",".","2",".",".",".","6"]
//        ,[".","6",".",".",".",".","2","8","."]
//        ,[".",".",".","4","1","9",".",".","5"]
//        ,[".",".",".",".","8",".",".","7","9"]]
//        Output: false

import java.util.*;
public class ValidSudoku {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        String suduko[][]=  {{"5","3",".",".","7",".",".",".","."}
                            ,{"6",".",".","1","9","5",".",".","."}
                            ,{".","9","8",".",".",".",".","6","."}
                            ,{"8",".",".",".","6",".",".",".","3"}
                            ,{"4",".",".","8",".","3",".",".","1"}
                            ,{"7",".",".",".","2",".",".",".","6"}
                            ,{".","6",".",".",".",".","2","8","."}
                            ,{".",".",".","4","1","9",".",".","5"}
                            ,{".",".",".",".","8",".",".","7","9"}};
        System.out.println("Is Suduko is Valid: "+isValidSuduko(suduko));


    }
    /* MARK:- Checking that is Sudoku Valid
       DESC: - We are checking that rows and columns of sudoku and finding that is there is any repeated element in any rows and column or not
             - Then we check the all 9 sub 3x3 boxes that is there any repeated elements in box or not
             - Checking that ALl conditions of Sudoku is valid or not by checking rows and cols and 3*3 SubMatrix
             - Rows must not contain any repeated values
             - Columns must not contain any repeated values
             -All SubColumn of 3x3 should not contain repeated values
*/
    public static boolean isValidSuduko( String suduko[][]){
        return (isValidRows(suduko) && isValidCols(suduko) && isValidSub(suduko));
    }


    /* MARK:- Checking that is Sudoku by Row
       DESC: - We are checking that rows finding that is there is any repeated element in any rows or not
           - Rows must not contain any repeated values
           - Checking that All Rows should not contain any repeated values
*/
    public static boolean isValidRows(String suduko[][]){
        ArrayList<Integer> list=new ArrayList<>();
        for(int j=0; j<9; j++) {
            list.clear();
            for (int i = 0; i < 9; i++) {
                if (suduko[j][i] != ".")
                    list.add(Integer.parseInt(suduko[j][i]));
            }
            if(isRepeatedExists(list)){
                return false;
            }
        }
        return true;
    }

    /* MARK:- Checking that is Sudoku for All 3x3 Matrices
       DESC: - First we iterate over the All 3x3 Matrix
             - Checking that All 3x3 Matrix is valid or not
  */
    public static boolean isValidSub(String suduko[][]){
        for(int i=0;i<9;i+=3) {
            for (int j = 0; j < 9; j+=3) {
                if (checkOneSub(suduko, i, j)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* MARK:- Checking that is Sudoku for one 3x3 Matrices
     DESC: - First we iterate over the 3x3 matrix
           - Then we add all elements of 3x3 matrix inside the ArrayList
           - Then we check in ArrayList that is there any element repeating or not
           - If any Element ios repeating then we return false;
*/
    public static boolean checkOneSub(String suduko[][],int index,int indexX){
        ArrayList<Integer> list=new ArrayList<>();
        for(int i=index;i<index+3;i++){
            for(int j=indexX;j<indexX+3;j++){
                if (!suduko[i][j].equals("."))
                    list.add(Integer.parseInt(suduko[i][j]));
            }
        }
        return isRepeatedExists(list);
    }


    /* MARK:- Checking that is Sudoku by Column
     DESC: - We are checking that rows finding that is there is any repeated element in any rows or not
           - Rows must not contain any repeated values
           - Checking that All Rows should not contain any repeated values
*/
    public static boolean isValidCols(String suduko[][]){
        // Checking that All Cols should not contain any repeated values

        ArrayList<Integer> list=new ArrayList<>();
        for(int j=0; j<9; j++) {
            list.clear();
            for (int i = 0; i < 9; i++) {
                if (suduko[i][j] != ".")
                    list.add(Integer.parseInt(suduko[i][j]));
            }
            if(isRepeatedExists(list)){
                return false;
            }
        }
        return true;
    }

    /* MARK:- Checking that is there is repeated element exists in ArrayList or not
       DESC: - We are iterating over the ArrayList and finding Duplicates
             - Counting occurrence of each element of ArrayList inside the HashMap
             - If Duplicate exists then return true else False
*/
    public static boolean isRepeatedExists(ArrayList<Integer> list){


     /*

         ########
          Way-1
         ########

         DESC: - We are iterating over the ArrayList and finding Duplicates
               - By Applying two Pointers Approach
               - If Duplicates found then return True else False

        for(int i=0;i< list.size();i++){
            for (int j = i+1; j <list.size() ; j++) { //Removing that number that having occurance More than 1
                if(list.get(i)==list.get(j)){
                    return true;
                }
            }
        }
        return false;

      */

        /*

         ########
          Way-1
         ########

         DESC: - We are iterating over the ArrayList and finding Duplicates
               - Counting occurrence of each element of ArrayList inside the HashMap
               - If Duplicate exists then return true else False

         */

        HashMap<Integer,Integer> map=new HashMap<>();// Adding all elements of Array inside tha HashMap

        for(int i=0;i<list.size();i++){ //Maintaining Record of number of occurance in Array
            if(!map.containsKey(list.get(i))){
                map.put(list.get(i), 1);
            }else{
                map.put(list.get(i),map.get(list.get(i))+1);
            }
        }
        for(int i: map.keySet()){
            if(map.get(i)>1){ //Picking up that having only one occurance
                return true;
            }
        }
        return false;
    }
}
