import java.util.*;
public class SwapFirstLastNumber {

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int num=s.nextInt();
        System.out.println(Integer.toString(num).charAt(0));
        System.out.println(swap(num));

    }

    public static int swap(int num){
        int value=num;
        int index=0;
        int first=-1;
        int last=-1;
        //finding first and last
        while(value!=0){
            if(index==0){
                last=value%10;
            }
            first=value;
            value/=10;
            index++;//counting length of number
        }

        // System.out.println(first);
        // System.out.println(last);
        // System.out.println(index);

        int decimal=(int)Math.pow(10,index-1);// creating 10th power for length
        value=num+(decimal*(last-first));// removing first old digit
        value/=10;
        value*=10;
        value+=first;//adding first digit at last
        return value;

    }





}