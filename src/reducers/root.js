import { combineReducers } from 'redux';

import deck from './deck';
import tierlist from './tierlist';
import locale from './locale';
import cardpicker from './cardpicker';
import selectedHero from './heropicker';

const rootReducer = combineReducers({
  deck,
  tierlist,
  locale,
  cardpicker,
  selectedHero
});

export default rootReducer;
