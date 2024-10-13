Function composition:
Function composition is a techique in programming where you combine two or more functions to create
new function. The result of one function is passed as the input to the next function.

Use Two Real World statements and implement Function composition.

Example Statement 1: Example Statement 1: Project manager Emailed, warning me not to miss the deadline again.

Create three functions. 

The first function, called email_form, they return `E-mail was sent from the project manager.`

The second function, called email_waring, with parameter email and pass "E-mail was sent from the project manager". and returns a new string by appending a warning message to the email.

The Last function, called  sent_email, this function calls email_from() first and then passes the result to the email_waring() function.

Use console to print combined message.

====================

Example Statement 2: Chocolate cake ingredients is mixed, baked until soft, and covered with creamy chocolate."

Create four functions.  

The first function, called cake_ingredients, takes a parameter cake and returns a string `Chocolate cake ingredients is mixed,`

The second function, called cake_baked, takes a parameter cake and pass "Chocolate cake ingredients is mixed," and returns `Chocolate cake ingredients is mixed, baked until soft,`

The third function, called decore, take a parameter cake and pass "Chocolate cake ingredients is mixed, baked until soft," and returns `Chocolate cake ingredients is mixed, baked until soft, and covered with creamy chocolate.`

The Last Function is make_chocolate_cake this function calls cake_ingredients() first and then passes the result to the second cake_baked() function this function passes the result to the decore() function.

Use console to print combined message.
