import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCardPickerSelection } from './actions/cardpicker';

class CardPicker extends Component {

  cardImage(card) {
    return 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/' + card.CardId + '.png';
  }

  cardStyle(card) {
    return {
      backgroundImage: 'url(' + this.cardImage(card) + ')'
    };
  }

  render() {

    const { dispatch, slot, filter, filteredCards } = this.props;

    const hasFilter = filter && filter.length > 2;
    const noMatched = hasFilter && filteredCards.length == 0 ?
      ( <li className="text-center"><em>No Matches</em></li>) :
      null;

    return (
      <div className="card-picker">
        <div className="form-group">
          <input className="form-control" type="text"
              value={filter}
              placeholder={"Enter " + slot + " card ..."}
              onChange={(e) => dispatch(updateCardPickerSelection(e.target.value, slot))} />
        </div>
        <ul className="list-unstyled">
          { filteredCards.map(card => (
            <li key={card.CardId} className="card-picker-card" tabIndex="1">
              <img src={this.cardImage(card)} alt={card.Name} />
              <span className="label label-default pull-right">
                <strong>{card._heroScore.Score}</strong>
                { ' ' }
                { card._heroScore.StopAfterFirst ? <span className="text-warning">X</span> : '' }
                { ' ' }
                { card._heroScore.StopAfterSecond ? <span className="text-danger">X</span> : ''}
              </span>
              { card.Name }
            </li>
          )) }
          { noMatched }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {

  const { cardpicker, tierlist } = state;
  const { slot } = props;

  if (typeof cardpicker[slot] === 'undefined') {
    throw new Error('Invalid slot for CardPicker: ' + slot);
  }

  const { filter, filteredCards } = cardpicker[slot];

  return {
    filter,
    filteredCards
  };
}

export default connect(mapStateToProps)(CardPicker);
