function buildInitialSlotState() {
  return { filter: '', filteredCards: [] };
}

const initialState = {
  first: buildInitialSlotState(),
  second: buildInitialSlotState(),
  third: buildInitialSlotState(),
  topcards: []
};

function validateSlot(action) {
  const slot = action.slot;
  if (typeof initialState[slot] === 'undefined') {
    throw new Error('Invalid slot: ' + slot);
  }
  return slot;
}

function topcards(cards) {
  var topval = 0;
  var topcards = [];
  cards.forEach(card => {
    if (card._heroScore.Score == topval) {
      topcards.push(card);
    } else if (card._heroScore.Score > topval) {
      topcards = [ card ];
      topval = card._heroScore.Score;
    }
  });
  return topcards;
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
          filter: action.filter,
          show: action.filter && action.filter.length > 2
        }
      };
    case 'SET_SLOT_CARDS':
      slot = validateSlot(action);
      state = {
        ...state,
        [slot]: {
          ...state[slot],
          filteredCards: action.filteredCards
        }
      };

      let allCards = [].concat(
        state.first.filteredCards,
        state.second.filteredCards,
        state.third.filteredCards);
      state.topcards = topcards(allCards);

      return state;
    default:
      return state;
  }
}
