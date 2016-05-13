export function setSlotFilter(filter, slot) {
  return {
    type: 'SET_SLOT_FILTER',
    slot,
    filter
  };
}
