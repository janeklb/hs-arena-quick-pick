import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectHero } from './actions/heropicker';

const heroes = [
  'Druid', 'Hunter', 'Mage',
  'Paladin', 'Priest', 'Rogue',
  'Shaman', 'Warlock', 'Warrior'
];

class HeroPicker extends Component {
  render() {

    const { dispatch, selectedHero } = this.props;

    return (
      <select className="form-control input-lg" value={selectedHero}
          onChange={(e) => dispatch(selectHero(e.target.value))}>
        <option value="">-- Select Hero --</option>
        { heroes.map(h => (<option value={h} key={h}>{h}</option>))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedHero: state.selectedHero
  };
}

export default connect(mapStateToProps)(HeroPicker);
