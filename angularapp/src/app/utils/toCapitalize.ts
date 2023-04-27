export function toCapitalize(value: string): string {
  if (value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
  }

  return value
}
