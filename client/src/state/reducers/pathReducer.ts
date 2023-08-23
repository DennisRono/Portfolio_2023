type Action = {
  type: string
  payload?: string
}
const pathReducer = (state: string = '/', action: Action) => {
  switch (action.type) {
    case 'SETPATH':
      return action.payload
    default:
      return state
  }
}

export default pathReducer
