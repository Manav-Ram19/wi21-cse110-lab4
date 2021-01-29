1. At line 11 the value of i will be printed.
   Reason: This is because var variables ignore code blocks (in this case the for loop), so they are visible throughout the function they have been defined in (unless they are global variables, which would make them visible throughout the code).

2. At line 12 the value of discountedPrice will be printed. 
   (It will be the value of the last element of prices after the discount has been applied on it).
   Reason: This is because var variables ignore code blocks (in this case the for loop), so they are visible throughout the function they have been defined in (unless they are global variables, which would make them visible throughout the code).

3. At line 13 the value of finalPrice will be printed.
   (It will be the value of the last element of prices after the discount has been applied on it and it has been rounded).
   Reason: Since the variable finalPrice was defined in the same function as line 13, the variable will be visible when it is called in line 13. Thus, there is no error, and instead its value will be printed.

4. The function will return [50,100,150].
   Reason: This is because the function iterates through the list [100, 200, 300] and it pushes 50% of each value into the list discounted, which gets returned by the function. 

5. At line 11 there will be a runtime exception.
   Reason: This is because let variables are only visible within the code blocks they have been defined in. Since i is a let variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what i is in line 11.

6. At line 12 there will be a runtime exception.
   Reason: This is because let variables are only visible within the code blocks they have been defined in. Since discountedPrice is a let variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what discountedPrice is in line 12.

7. At line 13 the value of finalPrice will be printed.
   (It will be the value of the last element of prices after the discount has been applied on it and it has been rounded).
   Reason: Since the variable finalPrice was defined in the same function as line 13, the variable will be visible when it is called in line 13. Thus, there is no error, and instead its value will be printed.

8. The function will return [50,100,150].
   Reason: This is because the function iterates through the list [100, 200, 300] and it pushes 50% of each value into the list discounted, which gets returned by the function.

9.  At line 11 there will be a runtime exception.
   Reason: This is because let variables are only visible within the code blocks they have been defined in. Since i is a let variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what i is in line 11.

10. At line 12 there will be a runtime exception.
   Reason: This is because consr variables are only visible within the code blocks they have been defined in. Since discountedPrice is a const variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what discountedPrice is in line 12.

11. At line 13 the value of finalPrice will be printed.
    (It will be 0).
    Reason: Since the variable finalPrice was defined in the same function as line 13, the variable will be visible when it is called in line 13. Thus, there is no error, and instead its value will be printed. Also, their values cannot be changed after they have been declared. This is why, finalPrice will maintain the same value (in this case 0) after each iteration of the for loop.

12. The function will return [0,0,0].
    Reason: This is because finalPrice is a const variable and during its declaration it was assigned the value 0. So, when line 6 is called (furing each iteration of the for loop), the value of finalPrice doesn't change. This is why, the value 0 will be pushed into discounted 3 times.
