export function setSlotFilter(filter, slot) {
  return {
    type: 'SET_SLOT_FILTER',
    slot,
    filter
  };
}

function setSlotCards(filteredCards, slot) {
  return {
    type: 'SET_SLOT_CARDS',
    slot,
    filteredCards
  }
}

export function getFilteredCards(slot, getState) {

  const { filter } = getState().cardpicker[slot];
  if (!filter || filter.length <= 2) {
    return [];
  }

  const { tierlist } = getState();

  const filterParts = filter.toLowerCase()
    .split(' ')
    .filter(part => !!part.trim());

  const filteredCards = tierlist.heroCards.filter((card) => {
    for (var part of filterParts) {
      if (card._lcName.indexOf(part) === -1) {
        return false;
      }
    }
    return true;
  });

  return filteredCards;
}

export function updateCardPickerSelection(slot) {
  const thunk = (dispatch, getState) => {
    var filteredCards = getFilteredCards(slot, getState);
    dispatch(setSlotCards(filteredCards, slot));
  };
  thunk.meta = {
    debounce: {
      time: 200,
      key: 'updateCardPickerSelection'
    }
  };
  return thunk;
}
