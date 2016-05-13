export default function selectedHero(state = '', action) {

  switch (action.type) {
    case 'SELECT_HERO':
      return action.hero;
    case 'UPDATE_TIER_LIST':
      return '';
  }

  return state;
}
