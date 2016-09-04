import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardPickerList extends Component {

  cardImage(card, large) {
    return `http://wow.zamimg.com/images/hearthstone/cards/enus/${large ? 'original' : 'small'}/${card.CardId}.png`;
  }

  render() {

    const { slot, show, filteredCards, topcards } = this.props;

    const noMatched = show && filteredCards.length == 0 ?
      ( <li className="text-center"><em>No Matches</em></li>) :
      null;

    const isTopCard = card => topcards.indexOf(card) !== -1;

    return (
      <ul className="list-unstyled">
        { filteredCards.map(card => (
          <li key={card.CardId} className="card-picker-card" tabIndex="1">
            <img src={this.cardImage(card)} alt={card.Name} />
            <span className={
                'label label-default pull-right' + (isTopCard(card) ? ' label-success' : '') }>
              <strong>{card._heroScore.Score}</strong>
              { ' ' }
              { card._heroScore.StopAfterFirst ? <span className="text-danger">X</span> : '' }
              { ' ' }
              { card._heroScore.StopAfterSecond ? <span className="text-danger">X</span> : ''}
            </span>
            { card.Name }
          </li>
        )) }
        { noMatched }
      </ul>
    );
  }
}

function mapStateToProps(state, props) {

  const { cardpicker } = state;
  const { slot } = props;

  if (typeof cardpicker[slot] === 'undefined') {
    throw new Error('Invalid slot for CardPicker: ' + slot);
  }

  const { show, filteredCards } = cardpicker[slot];

  return {
    show,
    filteredCards,
    topcards: cardpicker.topcards
  };
}

export default connect(mapStateToProps)(CardPickerList);
