
//Find all interleavings of given strings that can be formed from all the characters of the first and second string where the order of characters is preserved.
//
//        Input: str1 = "AB",  str2 = "CD"
//        Output:
//        ABCD
//        ACBD
//        ACDB
//        CABD
//        CADB
//        CDAB
//        Input: str1 = "AB",  str2 = "C"
//        Output:
//        ABC
//        ACB
//        CAB

import java.util.Scanner;

public class PossibleInterleavings {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter two Strings: ");
        String str1=s.next();
        String str2=s.next();
        findInterlevings(str1,str2);
    }
    public static void findInterlevings(String str1,String str2){
            PrintInterLeaving(str1,0,str2,0,"");
    }
    public static void PrintInterLeaving(String str1,int str1index,String str2,int str2index,String answer){
        if(str1index==str1.length() && str2index==str2.length()){
            System.out.println(answer);
        }
        if(str1index<str1.length()){
            String strNew=answer+str1.charAt(str1index);
            PrintInterLeaving(str1,str1index+1,str2,str2index,strNew);
        }
        if(str2index<str2.length()){
            String strNew=answer+str2.charAt(str2index);
            PrintInterLeaving(str1,str1index,str2,str2index+1,strNew);
        }
    }

//    public static void generate(String newString,int left,int right){
//
//        if(left==right){
//            System.out.println(newString);
//        }else{
//            for (int i = left; i <right ; i++) {
//                newString=swap(newString,left,i);
//                generate(newString,left+1,right);
//                newString=swap(newString,left,i);
//            }
//        }
//
//    }
//    public static String swap(String str,int i,int j){
//        char charArray[]=str.toCharArray();
//        char temp=charArray[i];
//        charArray[i]=charArray[j];
//        charArray[j]=temp;
//        return String.valueOf(charArray);
//    }
}
