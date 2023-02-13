import { SpecifiedRequest } from '@/interfaces/index.interface';
import LanguageService from '@/services/language.service';
import { NextFunction, Response } from 'express';

type TranslateLanguageProps = {
  text: string;
};

class LanguageController {
  private languageService = new LanguageService();

  public translateLanguage = async (
    req: SpecifiedRequest<TranslateLanguageProps>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { text } = req.query;

      console.log(text);

      const result = await this.languageService.translateLanguage(text);

      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default LanguageController;
