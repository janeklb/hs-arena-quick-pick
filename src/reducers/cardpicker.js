const initialState = {
  first: { filter: '' },
  second: { filter: '' },
  third: { filter: '' }
};

function validateSlot(action) {
  const slot = action.slot;
  if (typeof initialState[slot] === 'undefined') {
    throw new Error('Invalid slot: ' + slot);
  }
  return slot;
}

export default function cardpicker(state = initialState, action) {

  if (action.type == 'FULL_RESET') {
    return initialState;
  }

  switch(action.type) {
    case 'FULL_RESET':
      return initialState;
    case 'SET_SLOT_FILTER':
      const slot = validateSlot(action);
      return {
        ...state,
        [slot]: {
          ...state[slot],
          filter: action.filter
        }
      };
    default:
      return state;
  }
}
