/*
    write a program to "fold" long input lines into two or more shorter lines after the last non-blank
    character that occours before the n-th column of input. Make sure your program does something 
    intelligent with very long lines, and if there are no blanks or tabs before the specified column
*/

#include <stdio.h>

#define COLUMNTH 8

void main()
{
    int c, pos;

    while(c = getchar() != EOF)
    {
        if(c == '\n'){
            pos = 0;
        }
        if (c != ' ' || '\t')
            if ( (pos - (pos % COLUMNTH)) - 1 < 0) putchar(' ');

    }
    
}