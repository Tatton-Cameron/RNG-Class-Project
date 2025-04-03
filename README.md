# RNG-Class-Project
A webpage that houses a bunch of random generators such as coin flip, rolling dice, etc.
Input Validation: 
•	Picking a number between a range input
  o	Onkeypress - both ends must be numbers
  o	Onblur – rounds to nearest whole number
•	Choose best-out-of range for coin flip
  o	Onkeypress – range must be a number
•	Random list
  o	Onsubmit – not empty
Event Handlers:
•	Picking a number between a range input
  o	Onkeypress – input validation
  o	Onblur – rounds to nearest whole number
  o	Onsubmit – randomly picks a number and outputs it
•	Choose best-out-of range for coin flip
  o	Onkeypress – input validation
  o	Onmouseclick – flips coin equal to number of times chosen and outputs results
•	Random list
  o	Onsubmit – input validation, populates list
  o	Onmouseclick – removes item from list
  o	Onmouseclick – shuffles list
Document Queries:
•	Picking a number between a range input
  o	Retrieve input fields
•	Choose best-out-of range for coin flip
  o	Retrieve input field for best of 
•	Random list
  o	Retrieve input field for adding item
  o	Query list
  o	Shuffle button
Conditional Styling:
•	Coin flip rotation for number of times chosen
  o	Tells you how many times each face won
•	Red styling for incorrect input
•	Display random list when populated and a delete option for each item
•	Themes
Possible Extensions:
•	Could make random magic item buying simpler for dnd?
