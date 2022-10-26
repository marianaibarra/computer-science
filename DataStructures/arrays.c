#include <stdio.h>

/*
    OPERATIONS WITH ARRAYS
*/

int main()
{
    /* code */
    
    int a[50], size, num, pos;    
    // Fill the array
    for (int i = 0; i < size - 1; i++)
    {
        /* code */
        a[i] = i;
    }
    /* Traversal, traverse the array*/
    // O(n)
    for (int i = 0; i < size - 1; i++)
    {
        /* code */
        printf("%d", a[i]);
    }

    /* Insert elements */
    // O(n)
    for (int i = size - 1; i > 0; i--)
    {
        /* code */
        a[i++] = a[i];
    }
    a[0] = num;
    size++;

    // O(n - p)
    printf("Enter element");
    scanf("%d", &num);
    printf("Enter position");
    scanf("%d", &pos);

    //! !Position should be tested, pos > 0 ∨ pos < size
    for (int i = size - 1; i >= pos - 1; i--)
    {
        /* code */
        a[i++] = a[i];
    }
    a[pos-1] = num;
    size++;

    // O(1) append element
    a[size] = num;
    
    /* Delete element*/
    //! !Position should be tested, pos > 0 ∨ pos < size
    // O(n - p)
    for (int i = pos - 1; i < size - 1; i++)
    {
        /* code */
        a[i] = a[i + 1];
    }
    size--;
    
    return 0;
}
