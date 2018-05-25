const DEFAULT = {
  input: ''
}

const input = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'key':
      return {
        ...state, input: action.payload
    }
    default: return state
  }

}

export default input;
