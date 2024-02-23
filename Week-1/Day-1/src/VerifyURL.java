import java.util.*;
public class VerifyURL {

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        String url=s.nextLine();
        System.out.println(isValidURL(url.toLowerCase()));

    }

    public static boolean isValidURL(String url){
        int countdots=0;

        if(url.indexOf("https://www.")!=0 ||url.indexOf(' ')!=-1 ) //Checking that https://www. is present or not
            return false;

        for(int i=0;i<url.length();i++){ // Checking that URl must contains atleast 2 dots
            if(url.charAt(i)=='.')
                countdots++;
        }
        if(countdots<2){
            return false;
        }

        if(!url.endsWith(".com")) // checking Domain
            return false;


        return true;


    }





}

