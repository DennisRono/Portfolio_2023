export const setPath = (path: string) => {
  return {
    type: 'SETPATH',
    payload: path,
  }
}
