
//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//
//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
//        Input: grid = [
//        ["1","1","1","1","0"],
//        ["1","1","0","1","0"],
//        ["1","1","0","0","0"],
//        ["0","0","0","0","0"]
//        ]
//Output: 1
//Input: grid = [
//        ["1","1","0","0","0"],
//        ["1","1","0","0","0"],
//        ["0","0","1","0","0"],
//        ["0","0","0","1","1"]
//        ]
//Output: 3
public class IslandCount {
    public static void main(String[] args) {
        char ArrayOcean[][]= {
                {'1', '1', '1', '1', '0'},
                {'1', '1', '0', '1', '0'},
                {'1', '1', '0', '0', '0'},
                {'0', '0', '0', '0', '0'}
                };

        System.out.println(countTotalsLand(ArrayOcean));
    }

    /*  MARK: Count island
        DESC:- Here we are finding land (1) by iterating over the matrix if we found it than check the land
             - Increase count by 1
*/
        public static int countTotalsLand(char[][] ArrayOcean) {
            int islandCount = 0;
            for ( int x = 0; x < ArrayOcean.length; ++x ){
                for( int y = 0; y < ArrayOcean[0].length; ++y ){
                    if ( ArrayOcean[x][y] == '1'){// Visiting wholeOcean and searching that is there any Land found or not
                        checkLand(x,y,ArrayOcean); // If land is found that check that how much bigger the land is
                        islandCount++;
                    }
                }
            }
            return islandCount;
        }

    /*  MARK: Check Land Area
        DESC:- Here we are finding land that how big the land is
             - After visiting the land we rename it as new index lets say 9 and again search for land in all 4 directions

*/
        private static void checkLand( int x, int y, char[][] ArrayOcean ){
        // if the index x and y got inappropriate then break the recursion
            if ( x < 0 || x > ArrayOcean.length-1 || y < 0 || y > ArrayOcean[0].length-1 || ArrayOcean[x][y] != '1'){
                return;
            }else{
                ArrayOcean[x][y] = '9'; //Those land that we already visited give tham a unique number to identify
            }
            checkLand(x+1,y,ArrayOcean);//Check downwords
            checkLand(x,y+1,ArrayOcean);//Check rightside
            checkLand(x-1,y,ArrayOcean);//Check upwords
            checkLand(x,y-1,ArrayOcean);//Check Leftside
        }
    }

