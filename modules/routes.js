const express = require('express');
const router = express.Router();
const GAMES = require('../games.json');

router.get('/', (req, res) => {
    res.render('index', {GAMES});
});

router.get('/game/:gameName', (req, res) => {
    const gameName = req.params.gameName.toLowerCase();
    const isGameFounded = Object.keys(GAMES).find(game => game.toLowerCase() === gameName);
    isGameFounded ? res.render(gameName, {GAMES}) : res.status(404).send(`404: Page non trouvée`);
});

module.exports = router;