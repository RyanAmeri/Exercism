# Learnings of Palindrome Products

The original algorithm to perform this task seemed straightforward. However once I started implementing it, I encountered two main problems:

1. I couldn't firgure out what I needed to return from the static method. Since it's a static method, no object was created and I struggled with this and had to look at other people's solutions and then found that I had to return "this". Eventually that solved the problem.
2. The far bigger problem turned out to be how to optimize the code so that it would complete in a reasonable time. My original approach calculated all products and put them in a set, then caldulated all palindrome numbers and put them in an array, and then found all the factors of those numbers in the array. This turned out to be way too slow. I got rid of the product set and did some other optimizations but the code still runs way too slowly.
3. Eventually I eneded up changing my algorithm and making a hack based on the input numbers I was expecting. Instead of calculating all the palindromes, I only calculated the smallest and the largest. Calculating the smallest was easy enough, but calculating the largest turned out to be difficult and still slow. So I ended up hacking the for loops to only run so many times, and hoped that I would find the largest palindrome number in those loops. It turned out to be a successful strategy.
