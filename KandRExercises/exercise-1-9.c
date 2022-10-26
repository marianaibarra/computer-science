/**
 * Exercise 1.9 - Write a Program to copy its input to its output, replacing
 * each string of one or more blanks by a single blank.
 *
 * */

#include <stdio.h>

#define NONBLANK '-'

void main(int argc, char *argv[]){
    int c, lastc;

    lastc = NONBLANK;

    while ((c = getchar()) != EOF)
    {
        /* code */
        if(c == ' ')
        
            if (lastc != ' ')
                putchar(c);
        else
            putchar(c);
        lastc = c;
    }
    
}