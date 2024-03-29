export function isEmpty(val: any) {
  // test results
  //---------------
  // []        true, empty array
  // {}        true, empty object
  // null      true
  // undefined true
  // ""        true, empty string
  // ''        true, empty string
  // 0         false, number
  // true      false, boolean
  // false     false, boolean
  // Date      false
  // function  false

  if (val === undefined) return true;

  if (
    typeof val == 'function' ||
    typeof val == 'number' ||
    typeof val == 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  )
    return false;

  if (val == null || val.length === 0)
    // null or 0 length array
    return true;

  if (typeof val == 'object') {
    // empty object

    let r = true;

    for (const f in val) r = false;

    return r;
  }

  if (val == 'undefined') return true;

  return false;
}

export function generateRandomHash(length: number): string {
  if (!length) {
    length = 20;
  }

  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
