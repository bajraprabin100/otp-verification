export function stringify<T>(data: T): string {
  if(typeof data === 'string'){
    return `"${data}"`;
  }
  return JSON.stringify(data);
}

