export type SupportedLanguage = 'ko' | 'ja';

export type LanguageTranslateResult<
  Src extends SupportedLanguage = 'ko',
  Tar extends SupportedLanguage = 'ja',
> = {
  message: {
    result: {
      srcLangType: Src;
      tarLangType: Tar;
      translatedText: string;
      engineType: 'PRETRANS';
      pivot: unknown;
      dict: unknown;
      tarDict: unknown;
    };
    '@type': 'response';
    '@service': 'naverservice.nmt.proxy';
    '@version': '1.0.0';
  };
};
