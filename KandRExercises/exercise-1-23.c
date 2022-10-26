/*
    write a program to remove all comments from a C program. Don't forget to handle quoted strings
    and character constants properly. C comments do not nest. 

*/

#include <stdio.h>

void main()
{

    int c, inblock, incomment;

    inblock = incomment = 0;

    while ((c = getchar()) != EOF)
    {
        if(c != "\\") putchar(c);
        if(c == "\\") {
         incomment = 1;
        } 
        if(incomment == 1) {
            if(c == '*') inblock = 1;
            else if(c == "\\");
            else putchar("\\");
        }
    }

}