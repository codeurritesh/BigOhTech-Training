import java.util.*;
public class LargestDigitPrime {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int limit=s.nextInt();
        int ans=findNum(limit);
        System.out.println(ans);
    }

    public static int findNum(int limit){
        int allDigit[]=new int[2];
        int ans=0;
        ArrayList<Integer> list=new ArrayList<>();

        for(int i=limit;i>=0;i--){ // Adding all Digit of value in ArrayList
            int count=0;
            int value=i;
            list.clear();
            while(value!=0){
                int digit=value%10;
                list.add(digit);
                value=value/10;
            }

            for(int j=0;j<list.size();j++){ //Checking that All digits are prime of not
                if(isDigitPrime(list.get(j))){
                    count++;
                }
            }

            if(count==list.size()){
                return i;
            }



        }

        return ans;
    }
    public static boolean isDigitPrime(int digit){ // Checking that given digit is prime of not
        int count=0;
        for(int i=2;i<digit;i++){
            if(digit%i==0){
                count++;
            }
        }
        if(count==0){
            return true;
        }else{
            return false;
        }
    }
}
