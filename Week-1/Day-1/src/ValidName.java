import java.util.*;
public class ValidName {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        String str=s.next();
        System.out.println(isNameValid(str.toLowerCase()));

    }

    public static boolean isNameValid(String  str){ //Checking that it is Nalis name of not
        int allVowels=CountVowels(str);
        int allS=countS(str);
        if(allS!=2){
            return true;
        }
        if(allS==2 && str.indexOf('t')==-1){
            return true;
        }
        return false;
    }

    public static int CountVowels(String str){ //Counting Vowels
        int count=0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u')
                count ++;
        }
        return count;
    }

    public static int countS(String str){ // Counting all S
        int count=0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)=='s')
                count ++;
        }
        return count;
    }

}

