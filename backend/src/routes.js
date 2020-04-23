const express = require('express');
const routes = express.Router();

// Controllers
const CategoryController = require('./controllers/CategoryController');
const RuleController = require('./controllers/RuleController');
const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const AuthMiddleware = require('./middlewares/auth');

// No Auth
routes.post('/users', UserController.create);
routes.post('/sessions', SessionController.create);

routes.use(AuthMiddleware);

// Auth
routes.post('/categories', CategoryController.create);
routes.get('/categories', CategoryController.list);
routes.get('/categories/:id', CategoryController.findById);

routes.post('/rules', RuleController.create);
routes.get('/rules', RuleController.list);
routes.get('/rules/:id', RuleController.findById);

routes.post('/questions', QuestionController.create);
routes.get('/questions', QuestionController.list);
routes.get('/questions/:id', QuestionController.findById);

routes.post('/quiz', QuizController.create);
routes.get('/quiz', QuizController.list);
routes.get('/quiz/:id', QuizController.findById);
routes.put('/quiz/:quiz_id/send', QuizController.sendAnswer);
routes.get('/quiz/:quiz_id/next', QuizController.nextQuestion);

module.exports = routes;