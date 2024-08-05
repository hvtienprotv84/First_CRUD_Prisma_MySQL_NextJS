export function getEnumValue(enumerator: any, item: any): string {
    const index = Object.keys(enumerator).indexOf(item);
    const value = Object.values(enumerator)[index];
    return value as string;
  }
  