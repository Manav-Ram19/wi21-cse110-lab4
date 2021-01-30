# Part 3

**What was the bug?**  
Instead of adding the two inputs `num1` and `num2`, the interpreter considers `num1` and `num2` as strings and concatenates them while calculating `result`.  

**How would you fix it?**  

I added the `parseInt()` function into the expression to calculate `result`. I explicitly converted both `num1` and `num2` into integers, before adding them.
