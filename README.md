# BUG TRACKER

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is a chess full chess application, it includes a chess board with promotion, en passant, and move validation as well as an engine that uses ~~improved genetic search algorithms~~ a principal variation search to find the "best" move. This entails saving the best move at a previous iteration to search first, finding minimum acceptable moves for the opposing player (to cause beta cutoffs) and evaluating that position if the evauluation is acceptable for both players (beta > evauluation > alpha). We also store beta cutoffs to give the search more of a direction

## LIVE

| DEPLOYMENT     | URL              |
| -------------- | ---------------- |
| Repository     | [GitHub Repo](https://github.com/benw10-1/myChessEngine) |
| Published Page | [MyEngine](https://benw10-1.github.io/myChessEngine/) |

## License

This application is covered under MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
