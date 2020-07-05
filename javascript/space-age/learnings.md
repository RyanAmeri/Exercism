# Space Age
## Learnings
<del>I first went down the rabbit hole of trying to calculate the fraction of the year based on the day. This led me to first calculate the day of the year (which involved calculating whether it was a leap year or not) and then calculating the fraction based on that. This seemed to work for the first two tests, but eventually it failed on Venus by 0.01 of a faction, which implied that somewhere the method that I was using to calculate and round was slightly different from how the fraction was being calculated in the test. </del> 

<del>So eventually I had to redo my calculation, and this lead to a much simpler method of calculating the fraction of the year based on seconds. Which is obviously more accurate, and also enabled me to get rid of two functions (over half the code!).</del> 

<del>I learnt a lot about the date Objects again, manipulating them, and the dangers of rounding. I also got some more practice from using Map objects as well as rounding. Overall, a very good exercise.</del> 

## Modification post mentor feedback

This was much simpler, than the above descrtiption. There was no need to manipulate date objects and calculate fractions of the year. I just needed to calculate the year from the seconds, and then apply the orbital value. In hindsight, so simple!