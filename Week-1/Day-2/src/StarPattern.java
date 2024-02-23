
//Write a program to print the below pattern:
//          \*****/
//          *\***/*
//          **\*/**
//          ***/***
//          **/*\**
//          */***\*
//          /*****\

import java.util.Scanner;

public class StarPattern {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the Number of stars: ");
        // Takinig input Number of Stars
        int totalStars=s.nextInt();
        printPattern(totalStars);
    }

    /*
    MARK: Printing Pattern
    DESC: -Printing pattern in Decreasing order
          -Printing middle pattern
          - Printing Pattern in Incresing order
     */
    public static void printPattern(int stars){
    int first=0;
    int last=stars+1;
    // DESC: -Printing pattern in Decreasing order
        for (int j = 0; j < stars-2 && first!=last; j++) {
            System.out.println();
            for (int i = 0; i < stars + 2; i++) {
                if(i==first && i==last)
                    System.out.println("/");
                else if (i == first) {
                    System.out.print("\\");
                } else if (i == last) {
                    System.out.print("/");
                } else
                    System.out.print("*");

            }
                first++;
                last--;
        }
        System.out.println();
        // DESC: -Printing middle pattern
        for(int i=0;i<stars+1;i++){
            if(i==first)
            System.out.print("/");
            else System.out.print("*");
        }
        first--;
        last++;
        // DESC: -Printing Pattern in Incresing order
        for (int j = 0; j < stars-2 && first>=0 ; j++) {
            System.out.println();
            for (int i = 0; i < stars + 2; i++) {
                if (i == first) {
                    System.out.print("/");
                } else if (i == last) {
                    System.out.print("\\");
                } else
                    System.out.print("*");

            }
            first--;
            last++;
        }
    }
}
