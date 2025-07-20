import { Router } from 'express';
import { API_ROUTES } from '../constants';
import { helloController, echoController } from '../controllers';

const router = Router();

// Hello route
router.get(API_ROUTES.hello, helloController.getHello);

// Echo route
router.post(API_ROUTES.echo, echoController.echo);

export { router as apiRouter };