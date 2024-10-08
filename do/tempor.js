function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return false;
  }

  if (a.constructor !== b.constructor) return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}
