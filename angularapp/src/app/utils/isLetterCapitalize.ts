function isLetterCapitalize(value: string = ''): boolean {
  return /(?=.*?[A-Z])\w+/g.test(value)
}

export { isLetterCapitalize }
