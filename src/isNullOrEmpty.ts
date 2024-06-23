export class isNullOrEmpty {
  static isNullOrEmpty(obj: any): boolean {
    if (obj == null)
      return true;
    if (typeof obj === 'string')
      return obj === '';
    if (typeof obj === 'number')
      return isNaN(obj);
    if (typeof obj === 'boolean')
      return false;
    if (Array.isArray(obj)) {
      if (obj.length === 0)
        return true;
      return obj.every(x => this.isNullOrEmpty(x));
    }

    if (typeof obj === 'object' && Object.values(obj).some(value => !this.isNullOrEmpty(value)))
      return false;

    return true;
  }
}
