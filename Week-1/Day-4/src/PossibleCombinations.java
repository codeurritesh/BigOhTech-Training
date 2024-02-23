
//Write a program to print all the possible combinations according to the input values.
//        Example :
//        Given Values
//        '1' : ['Z', 'Y', 'A'],
//        '2' : ['B', 'O'],
//        '12' : ['L']
//        '3' : ['U', 'P']
//        Input: 123
//        Output : [ZBU, ZBP, ZOU, ZOP, YBU, YBP, YOU, YOP, ABU, ABP, AOU, AOP, LU, LP]

import java.util.ArrayList;
import java.util.HashMap;

public class PossibleCombinations {
    public static void main(String[] args) {
        HashMap<String,char[]>map=new HashMap<>();
        map.put("1", new char[]{'Z', 'Y', 'A'});
        map.put("2", new char[]{'B', 'O'});
        map.put("12", new char[]{'L'});
        map.put("3", new char[]{'U','P'});
        String input="123";
        ArrayList<String> output=new ArrayList<>();
        generateSolution(map, input, 0, 1, "", output);

        System.out.println(output);

    }

    /*    MARK:- Finding All Possible Combinations
          DESC: - This function is to find the all possible combinations
            - Here we are providing the parameters like:
                   - Map
                   - Starting Index as 0
                   - Ending Index as 1
                   - Empty String for collecting all Possible Combinations
                   - Result List for Final output printing
*/
    public static void generateSolution (
            HashMap<String, char[]> map,
            String input,
            int starting,
            int ending,
            String thisSol,
            ArrayList<String> output
    ) {
        if (ending > input.length()) {
            output.add(thisSol);
            return;
        }

        if (starting >= input.length())
            return;

        while (ending <= input.length()) {
            // Finding subset of input like
//                    - 123--> 1, 2, 3, 12, 23, 123
            String key = input.substring(starting, ending);

            if (map.containsKey(key)) {
                for (char c : map.get(key))
                    generateSolution(map, input, ending, ending + 1, thisSol + c, output);
            }

            ending ++;
        }
    }

}
