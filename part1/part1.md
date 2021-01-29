# Questions 1-17
1. `3`  
   Reason: This is because `var` variables ignore code blocks (in this case the for loop), so they are visible throughout the function they have been defined in (unless they are global variables, which would make them visible throughout the code).

2. `150`  
   (It will be the value of the last element of prices after the discount has been applied on it).  
   Reason: This is because `var` variables ignore code blocks (in this case the for loop), so they are visible throughout the function they have been defined in (unless they are global variables, which would make them visible throughout the code).

3. `150`  
   (It will be the value of the last element of prices after the discount has been applied on it and it has been rounded).  
   Reason: Since the variable `finalPrice` was defined in the same function as line 13, the variable will be visible when it is called in line 13. Thus, there is no error, and instead its value will be printed.

4. `[50,100,150]`   
   Reason: This is because the function iterates through the list `[100, 200, 300]` and it pushes 50% of each value into the list `discounted`, which gets returned by the function. 

5. At line 11 there will be an error.  
   Reason: This is because `let` variables are only visible within the code blocks they have been defined in. Since `i` is a `let` variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what `i` is in line 11.

6. At line 12 there will be an error.  
   Reason: This is because `let` variables are only visible within the code blocks they have been defined in. Since `discountedPrice` is a `let` variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what `discountedPrice` is in line 12.

7. `150`   
   (It will be the value of the last element of prices after the discount has been applied on it and it has been rounded).  
   Reason: Since the variable `finalPrice` was defined in the same function as line 13, the variable will be visible when it is called in line 13. Thus, there is no error, and instead its value will be printed.

8. `[50,100,150]` (ignoring the errors caused by the previous lines)  
   Reason: This is because the function iterates through the list `[100, 200, 300]` and it pushes 50% of each value into the list discounted, which gets returned by the function.

9.  At line 11 there will be an error.  
   Reason: This is because `let` variables are only visible within the code blocks they have been defined in. Since `i` is a `let` variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what `i` is in line 11.

10. At line 12 there will be an error.  
   Reason: This is because `const` variables are only visible within the code blocks they have been defined in. Since `discountedPrice` is a `const` variable defined inside the for loop, it is only visible within the for loop, and it cannot be accessed before or after the for loop. Thus, the interpreter doesn't know what `discountedPrice` is in line 12.

11. At line 13 there will be an error.  
    Reason: Since the variable `finalPrice` is of type `const`, its value can not be changed. In line 6, in the for loop, the code attempts to change the value of the variable `finalPrice`. This is why, an error will be thrown.

12. `[0,0,0]` (ignoring the errors caused by the previous lines)  
    Reason: This is because `finalPrice` is a `const` variable and during its declaration it was assigned the value 0. So, when line 6 is called (during each iteration of the for loop), the value of `finalPrice` doesn't change. This is why, the value 0 will be pushed into `discounted` 3 times.

13. a. student.name  
    b. student["Grad Year"]  
    c. student.greeting()  
    d. student["Favorite Professor"].name  
    e. student.courseLoad[0]  

14. a. `'32'`  
      Reason: The `2` gets converted into a string `'2'`, and we get `'3' + '2'`. The string gets concatenated and we get `'32'`.  
    b. `1`  
      Reason: The `3` gets converted into an int `3`, and we get `3-2`. This results in `1`.  
    c. `3`  
      Reason: The `null` gets converted into a `0`, and we get `3+0`. This results in `3`.  
    d. `'3null'`  
      Reason: The null gets converted into the string `'null'`, and we get `'3'+'null'`. The string gets concatenated and we get `'3null'`.  
    e. `4`  
      Reason: The true gets converted into the int `1`, and we get `1+3`. This results in `4`.  
    f. `0`  
      Reason: The true gets converted into the int `0` and the null gets converted into the int `0`. This results in `0+0`, which results in `0`.  
    g. `'3undefined'`  
      Reason: The undefined gets converted into the string `'undefined'`, and we get `'3'+'undefined'`. The string gets concatenated and we get `'3undefined'`.  
    h. `NaN`  
      Reason: The undefined gets converted into `NaN` and the `'3'` gets converted into the int `3`. This gives`3+NaN`, which results in `NaN`.  

15. a. `true`  
      Reason: The `'2'` gets converted into the int `2` which gives, `2>1`. This results in `true`.  
    b. `false`  
      Reason: In Lexicographic order, `'2'` comes after `'1'`, so `'2' > '1'`. Thus, `'2' > '12'`. Thus it results in `false`.  
    c. `true`  
      Reason: The `'2'` gets converted into the int `2` which gives, `2==2`. This results in `true`.  
    d. `false`  
      Reason: The `===` operator is the strict equality operator, so the types of the data being compared aren't converted. As `2` is an Int, and `'2'` is a String, they are not equal according to the `===` operator. This results in `false`.  
    e. `false`  
      Reason: The `true` gets converted into the int `1` which gives, `1==2`. This results in `false`.  
    f. `true`  
      Reason: The `Boolean(2)` gets converted into the boolean `true` which gives, `true===true`. This results in `true`.  

16. The `==` is more flexible than the `===` operator. The `==` operator would type convert both of the data being compared, and then check equality (or inequality). But, if the data aren't of the same type, then the `===` operator would return `false`, without converting the types. For instance, while comparing the string `'2'` with the int `2`, `2=='2'` would return true, because the `'2'` would be converted into an integer `2`. On the other hand, `2==='2'` would return false.  

17. `'How are you?'`  
    Reason: `2==true` would return false, because the `true` would get converted into the int `1`, which gives `2==1`. This is false, so the interpreter moves to the else-if condition. Here, the `2` gets converted into the boolean `true`. Since, the condition is `true` the code `console.log('How are you?');` is run, and the else condition is skipped.  