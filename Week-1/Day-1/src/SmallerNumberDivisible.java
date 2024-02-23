
import java.util.*;

public class SmallerNumberDivisible {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int num=s.nextInt();
        int value=findMinValue(num);
        System.out.println(value);
    }

    public static int findMinValue(int num){
        int fact=FindFactorial(num); //Finding Factorial
        int copy=fact;
        int result=copy;
        for(int i=fact;i>=2;i--){// Finding Minimum

            for(int j=1;j<=num;j++){ //Finding that all value 1 to n is divisible to fact or not
                if(i%j!=0){
                    break;
                }
                if(j==num){
                    copy=i;
                }
            }
        }

        return copy;
    }

    public static int FindFactorial(int num){ // finding factorial function

        int fact=1;
        for(int i=2;i<=num;i++){
            fact*=i;
        }
        return fact;
    }





}
