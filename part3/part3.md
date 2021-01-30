# Part 3

## DevTools - Debugging
**What was the bug?**  
Instead of adding the two inputs `num1` and `num2`, the interpreter considers `num1` and `num2` as strings and concatenates them while calculating `result`.  

**How would you fix it?**  

I added the `parseInt()` function into the expression to calculate `result`. I explicitly converted both `num1` and `num2` into integers, before adding them.

<img width="584" alt="Screen Shot 2021-01-29 at 10 50 54 PM" src="https://user-images.githubusercontent.com/60715649/106349677-ae099200-6284-11eb-840e-ac5950f3b227.png">

<img width="631" alt="Screen Shot 2021-01-29 at 10 51 17 PM" src="https://user-images.githubusercontent.com/60715649/106349686-cbd6f700-6284-11eb-9a12-cc788fdd7df7.png">

## DevTools - Network Tab
1. citylots.json
2. part2.js
3. 11.7 MB
4. 80 milliseconds
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()
