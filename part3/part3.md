# Part 3

**What was the bug?**  
Instead of adding the two inputs `num1` and `num2`, the interpreter considers `num1` and `num2` as strings and concatenates them while calculating `result`.  

**How would you fix it?**  

I added the `parseInt()` function into the expression to calculate `result`. I explicitly converted both `num1` and `num2` into integers, before adding them.

<img width="584" alt="Screen Shot 2021-01-29 at 10 50 54 PM" src="https://user-images.githubusercontent.com/60715649/106349677-ae099200-6284-11eb-840e-ac5950f3b227.png">

