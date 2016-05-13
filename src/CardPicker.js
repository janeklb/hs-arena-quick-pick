import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSlotFilter } from './actions/cardpicker';

class CardPicker extends Component {

  render() {

    const { dispatch, slot, filter, filteredCards } = this.props;

    const hasFilter = filter && filter.length > 2;
    const noMatched = hasFilter && filteredCards.length == 0 ?
      ( <li><em>No Matches</em></li>) :
      null;

    return (
      <div className="card-picker">
        <div className="form-group">
          <input className="form-control" type="text"
              value={filter}
              placeholder={"Enter " + slot + " card ..."}
              onChange={(e) => dispatch(setSlotFilter(e.target.value, slot))} />
        </div>
        <ul>
          { filteredCards.map(card => (
            <li key={card.CardId} className="card-picker-card">
              <span className="pull-right">
                { card._heroScore.StopAfterSecond ? <span className="text-danger">X</span> : ''}
                { ' ' }
                { card._heroScore.StopAfterFirst ? <span className="text-warning">X</span> : '' }
                { ' ' }
                <strong>{card._heroScore.Score}</strong>
              </span>
              {card.Name}
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

  var filter = cardpicker[slot].filter,
      filteredCards = [];

  if (filter && filter.length > 2) {

    const filterParts = filter.toLowerCase()
      .split(' ')
      .filter(part => !!part.trim());

    filteredCards = tierlist.heroCards.filter((card) => {
      for (var part of filterParts) {
        if (card._lcName.indexOf(part) === -1) {
          return false;
        }
      }
      return true;
    });
  }

  return {
    filter,
    filteredCards
  };
}

export default connect(mapStateToProps)(CardPicker);