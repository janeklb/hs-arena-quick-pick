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

export function getFilteredCards(filter, getState) {

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

export function updateCardPickerSelection(filter, slot) {
  return (dispatch, getState) => {

    dispatch(setSlotFilter(filter, slot));

    var filteredCards = getFilteredCards(filter, getState);
    dispatch(setSlotCards(filteredCards, slot));

  };
}
