import { Router } from 'express';
import LanguageController from '@controllers/language.controller';
import { Routes } from '@interfaces/routes.interface';

class LanguageRoute implements Routes {
  public path = '/lng';
  public router = Router();
  public languageController = new LanguageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/translate`, this.languageController.translateLanguage);
  }
}

export default LanguageRoute;
