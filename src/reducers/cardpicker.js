function buildInitialSlotState() {
  return { filter: '', filteredCards: [] };
}

const initialState = {
  first: buildInitialSlotState(),
  second: buildInitialSlotState(),
  third: buildInitialSlotState()
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

  var slot;

  switch(action.type) {
    case 'FULL_RESET':
      return initialState;
    case 'SET_SLOT_FILTER':
      slot = validateSlot(action);
      return {
        ...state,
        [slot]: {
          ...state[slot],
          filter: action.filter
        }
      };
    case 'SET_SLOT_CARDS':
      slot = validateSlot(action);
      return {
        ...state,
        [slot]: {
          ...state[slot],
          filteredCards: action.filteredCards
        }
      };
    default:
      return state;
  }
}
