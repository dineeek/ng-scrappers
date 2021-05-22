const diacriticCharacters: { [key: string]: string } = {
  '\u00c5\u00a0': 'Š',
  '\u00c5\u00a1': 'š',
  '\u00c4\u0087': 'ć',
  '\u00c4\u008d': 'č',
  '\u00c5\u00bd': 'Ž',
  '\u00c5\u00be': 'ž',
  '\u00c4\u0090': 'Đ',
  '\u00c4\u0091': 'đ',
  '\u00c3\u00bc': 'ü',
  '\u00c2\u00b0': '°',
  '\u00c3\u0081': 'Á',
  '\u00c3\u00a1': 'á',
  '\u00c3\u0089': 'É',
  '\u00c3\u00a9': 'é',
  '\u00c3\u00ad': 'í',
  '\u00c3\u00ba': 'ú',
  '\u00c3\u00bd': 'ý',
  '\u00c4\u008c': 'Č',
  '\u00c4\u008f': 'ď',
  '\u00c4\u009b': 'ě',
  '\u00c5\u0098': 'Ř',
  '\u00c5\u0099': 'ř',
  '\u00c5\u00af': 'ů',
  '\u00c5\u0081': 'Ł',
  '\u00c3\u00b6': 'ö',
};

export function decodeDiacritics(text: string) {
  const diacritics = Object.keys(diacriticCharacters);

  diacritics.forEach((diacritic) => {
    text = text.split(diacritic).join(diacriticCharacters[diacritic]);
  });

  return text;
}
