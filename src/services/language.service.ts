import { sendUrl } from '@utils/util';
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@/config';
import axios from 'axios';
import { LanguageTranslateResult } from '@/interfaces/language.interface';

class LanguageService {
  constructor() {
    this.getNaverHeader();
  }

  private getNaverHeader() {
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
    axios.defaults.headers.post['x-naver-client-id'] = NAVER_CLIENT_ID;
    axios.defaults.headers.post['x-naver-client-secret'] = NAVER_CLIENT_SECRET;
  }

  public async translateLanguage(text: string) {
    const {
      data: {
        message: {
          result: { translatedText },
        },
      },
    } = await sendUrl<LanguageTranslateResult>({
      method: 'POST',
      url: 'https://openapi.naver.com/v1/papago/n2mt',
      params: {
        source: 'ja',
        target: 'ko',
        text,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-naver-client-id': NAVER_CLIENT_ID,
        'x-naver-client-secret': NAVER_CLIENT_SECRET,
      },
    });

    return translatedText;
  }
}

export default LanguageService;
