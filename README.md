# Chess Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is full chess application, it includes a chess board with promotion, en passant, and move validation as well as an engine that uses ~~improved genetic search algorithms~~ a principal variation search to find the "best" move. This entails saving the best move at a previous iteration to search first, finding minimum acceptable moves for the opposing player (to cause beta cutoffs) and evaluating that position if the evauluation is acceptable for both players (beta > evaluation > alpha). We also store beta cutoffs to give the search more of a direction. <br> Note: I did edit the chess.js library to allow me to filter out captures more efficiently. I will make my own move generation in the future as most of the work is being done withing move generation so I am planning to combine move generation and the prinicpal variation search algorithm.

## Page

Visit the page [here](https://benw.app/chessEngine)
