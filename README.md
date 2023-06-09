# Puzzle-Game

## Hello Welcome to the puzzle game built using MERN stack

## Live Link
https://flourishing-dusk-0edfbf.netlify.app

## Soft skills to be accessed
- Problem Solving
- Numerical ability
- Time management,
- Attention Details 
- General Knowlegde
- Thinking Ability

## Possible ways
There are 6 puzzles in the website. On each puzzle, the user has to guess the given flag. The flag can be case sensitive if given or can't be if the user has to guess that. One has to complete all the puzzles to complete the game.

## Dead ends
There are 2 deadends of this project.
The first one is linked with the puzzle 3. It redirects to a new website made by me. There the user can play with the image and text stuffs, but cannot find the clue. The real clue is in the hint section.
The second one is linked with puzzle 5. Here there is a fibonacci series which goes infinitely. If the user falls into that, he cannot reach the solution. The actual ans is given in the input box element ID.

## steps to setup the project
- It is built using MERN stack
- there are 2 folder server and client
- go to server and client one by one and run the command "npm install"
- After that run them both by using "npm start" concurrently and the website is visible.

## Checklist of implemented features
- User only need a email id to create a account. After that he can log in to the game and enjoy it.
- The puzzle contains - 6 puzzles, 2 deadends and 1 solution.
- All the progresses are stored in the database for every users. Users can see the no of tries and current time during solving the puzzle.
- On refreshing the page, the puzzle again starts from where it ends.
- A admin dashboard is also given, where all the users can be tracked based on several factors.

## Additional requirements
- User analytics (no of tries, time required to slove a puzzles, total tries, total time) is stored and shown in the admin dashboard.
- Data analysis using tables, can be sort in varius factors.
- User leaderboard is given.

## Quizes Answer
Q1:
Need to replace wrong spelled letters with the correct one.
=> Ans: "Ydrr"

Q2:
Big indian, number 16 gives hints of Binary to text encoding with 'UTF - 16 big endian'
=> Ans: "Answer"

Q3 (deadend present):
The link takes the user to a external link, where there is no clues. If one takes the first letters of all the five friends it becomes ASCII. And if user converts the numbers to ASCII characters he can easily get the answer.
=> Ans: "India"

Q4:
Just do it is the tagline of Nike. So it it the answer. Also the answer is case insensitive as the direct answer is not given.
=> Ans: "Nike" [case insensitive]

Q5 (deadend present):
There is a infinite fibonacci series present. The hint tells the user about ID. The original answer is int the input tag ID. One need to inspect the website to see this.
=> Ans: "Summer"

Q6:
The hint says about the prime. The question is about prime numbers. If any characters ASCII value is x the encoded value is x'th prime number. User need to decode the encrypted text to get the prime.
=> Ans: "WellDone"

After user solve all the puzzles, he will be taken to the final page and also leaderboard is visible to him.