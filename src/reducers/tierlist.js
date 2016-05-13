function findHeroScore(card, hero) {

  for (var score of card.Scores) {
    if (score.Hero == hero) {
      return score;
    }
  }

  for (var score of card.Scores) {
    if (score.Hero == null) {
      return score;
    }
  }
}

export default function tierlist(state = null, action) {

  switch (action.type) {
    case 'RESET_TIER_LIST':
      return null;
    case 'NOTIFY_TIER_LIST_READY':
      return {
        ...state,
        ready: true
      };
    case 'UPDATE_TIER_LIST':

      const { tierlist } = action;

      return {
        ...tierlist,
        ready: false
      };

    case 'SELECT_HERO':

      const { hero } = action;

      const heroCards = state.Cards
        .filter(card => card.Hero === null || card.Hero === hero)
        .map(card => (
          {
            ...card,
            _lcName: card.Name.toLowerCase(),
            _heroScore: findHeroScore(card, hero)
          }
        ));

      return {
        ...state,
        heroCards
      };
  }

  return state;
}
