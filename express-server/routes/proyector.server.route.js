// ./express-server/routes/proyector.server.route.js
import express from 'express';

//import controller file
import * as proyectorController from '../controllers/proyector.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(proyectorController.getProyectores)
     .post(proyectorController.addProyector)
     .put(proyectorController.updateProyector);

router.route('/:id')
      .get(proyectorController.getProyector)
      .delete(proyectorController.deleteProyector);


export default router;
