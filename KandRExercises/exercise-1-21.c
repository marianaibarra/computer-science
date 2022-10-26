/*
    write a program entab that replaces strings of blanks by the minimum number of tabs and blanks to 
    achieve the same spacing. Use the same tab stops as for detab. 
    When either a tab or a single blank would suffice to reach a tab stop, which should be given 
    preference?

*/

#include <stdio.h>

#define COLUMN 8

/* replaces blanks with tabs */
void main(int argc, char *argv[]){

    int c, pos,nb, nt;

    nb = nt = 0;

    for (pos = 1; (c = getchar()) != EOF; pos++)
    {
        /* code */
        if(c == ' '){
            if((pos % COLUMN) != 0)
                ++nb;
            else{
                nb = 0;
                ++nt;
            }
        }
        else{
            while (nt > 0)
            {
                /* code */
                putchar('\t');
                --nt;
            }
            if (c == '\t')
                nb = 0;
            else
                while (nb > 0)
                {
                    /* code */
                    putchar(' ');
                    --nb;
                }
            
            putchar(c);

            if(c == '\n')
                pos = 0;
            else if(c == '\t')
                pos = pos + (COLUMN - ((pos - 1) % COLUMN) - 1);
        }
    }
    
}