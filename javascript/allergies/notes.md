# Allergies
## Learnings
This was a whirlwinds of an exercise. It took me over 2 hours to solve this but I'm very glad as I learnt A LOT. Key amongst them: 
* How to create a map
1. how to initialize a map
2. how to convert a map into an array, 
3. How to sort a map by a custom sort function (in this case using the values) and return it as a map
* Further practice in using "this" keyword. 

## Improvements
* Currently it uses a class field. This is perhaps not the best usage and could be improved. 
* Creating a temp map in list() just to sort the items backwards again looks wasteful, but the tests require the returned array in a specific order, and I couldn't find a better way

## Learning from Community Solutions
Having looked at the community solutions, I think mine is better. Most have gone with defining the allergies in a simple array, and then calculating the scores based on the index of the array. This works, and is simpler, but I'd argue that it ties program execution to the order of array and so is not very flexible. The solution here is able to deal with an extending list of allergies, and the order of insertion does not matter. They just need to be added to the dictionary. 