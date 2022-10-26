/*
    write a program detab that replaces tabs in the input with the proper number of blanks to space
    to the next tab store. Assume a fixed set of tab stops, say every n columns. Should n be a variable
    or a symbolic parameter?

*/

#include <stdio.h>

#define COLUMN 8

/* replaces tabs with blanks spaces */
void main()
{
    int c, pos, nb;

// nb = number of blanks
    nb = 0;
    pos = 1;

    while ((c = getchar()) != EOF)
    {
        if(c == '\t')
        {
            nb = COLUMN - ((pos - 1) % COLUMN);
            /*
            ex: hello   world   is      great
            determine nb betwn is and great
            nb = COLUMN - ((pos - 1) % COLUMN)
            nb = COLUMN - ((19 - 1) % COLUMN)
            nb = COLUMN - (18 % COLUMN)
            nb = COLUMN - (18 % 8)
            nb = COLUMN - (2)
            nb = 8 - 2
            nb = 6
            
            */

            while (nb > 0)
            {
                putchar("#");
                ++pos;
                --nb;
            }
            
        }
        else if(c == '\n')
        {
            putchar(c);
            pos = 1;
        }
        else
        {
            putchar(c);
            ++pos;
        }
    }
    
}