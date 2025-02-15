# Minesweeper Web Game

## Description

Minesweeper Web Game is a browser-based version of the classic Minesweeper game. Built with Node.js, Express, and vanilla JavaScript, HTML, and CSS, this project lets players choose from three difficulty levels—easy, normal, and hard—and enjoy interactive gameplay.

## Features

- **Multiple Difficulty Levels:** 
  - *Easy:* 8x8 board with 10 bombs.
  - *Normal:* 16x16 board with 40 bombs.
  - *Hard:* 15x32 board with 100 bombs.
- **Dynamic Board Generation:** Random bomb placement and automatic calculation of adjacent bomb counts.
- **Interactive UI:** Left-click to reveal cells and right-click to flag potential bombs.
- **Modern Development:** Uses ES modules, Express for the backend, and nodemon for live reloading.

## Installation

1. **Clone the Repository**

   - Via HTTPS:
     ```bash
     git clone https://github.com/your-username/minesweeper.git
     ```
   - Via SSH:
     ```bash
     git clone git@github.com:your-username/minesweeper.git
     ```
   - Or download the ZIP file from the repository page and extract it.

2. **Install Dependencies**

```bash
   cd minesweeper
   npm install
```

## Usage
1. **Start the Server**
 ```bash
 npm start
```
2. **Open Your Browser**
 Navigate to http://localhost:3000 to access the game.
3. **Gameplay Overview**
   - **Home Screen:** Choose a difficulty level (easy, normal, or hard) by clicking on the corresponding box. Then click the **play** button.
   - **Game Screen:** The board is generated based on your choice. Click a cell to reveal its content. Right-click to flag a cell if you suspect it contains a bomb.
   - **Game End:** Revealing a bomb ends the game with a loss, while clearing all non-bomb cells results in a win.

## Authors
[Erik Galstyan](https://github.com/Erik-Galstyan)

