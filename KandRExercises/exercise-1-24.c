/*
    write a program to check a C program for rudimentary syntax errors like unbalanced parenthesis,
    brackets and braces. Don't forget about quotes, both single and double, escape sequences, and 
    comments. (This program is hard if you do it in full generality)
*/ 

#include <stdio.h>

()
[]
{}

void main(){
        
    int c, inbrack, inparent, inbrace, inquote;

    inbrack = inparent = inbrace = inquote = 0;

    while ((c = getchar()) != EOF)
    {
        t = 0;
        switch (c)
        {
        case 1: c == "("
            ++inparent;
            break;
        case 2: c == "["
            ++inbrace;
            break;
        case 3: c == "{"
            ++inbrack;
            break;
        case 5: c == ")"
            --inparent;
            break;
        case 6: c == "]"
            --inbrace;
            break;
        case 7: c == "}"
            --inbrack;
            break;  
        default:
            break;
        }        
    }

    if(inparent % 2 != 0 || inparent == 0) printf("Mismatched parenthesis");
    if(inbrace % 2 != 0 || inbrace == 0) printf("Mismatched braces");
    if(inbrack % 2 != 0 || inbrack == 0) printf("Mismatched brackets");
}
