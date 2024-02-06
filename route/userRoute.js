const express = require('express');
const { createUser, loginController } = require('../controller/userController');
const { newsHeadlines, HeadlinesTechcrunch, AppleHeadlines } = require('../controller/newsController');
const weatherForecast = require('../controller/weatherController');
const router = express.Router();


router.post('/users/register',createUser)
router.post('/users/login',loginController)
router.get('/news/topHeadlines',newsHeadlines)
router.get('/news/crunch',HeadlinesTechcrunch)
router.get('/news/appleNews',AppleHeadlines)
router.get('/weatherForecast',weatherForecast)

module.exports = router;