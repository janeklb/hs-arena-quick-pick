import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCardPickerSelection, setSlotFilter } from './actions/cardpicker';

class CardPickerFilter extends Component {

  render() {

    const { onFilterChange, slot, filter } = this.props;

    return (
      <div className="form-group">
        <input className="form-control" type="text"
            value={filter}
            placeholder={"Enter " + slot + " card ..."}
            onChange={(e) => onFilterChange(e.target.value, slot)} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {

  const { cardpicker } = state;
  const { slot } = props;

  if (typeof cardpicker[slot] === 'undefined') {
    throw new Error('Invalid slot for CardPicker: ' + slot);
  }

  const { filter } = cardpicker[slot];

  return {
    filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterChange: (filter, slot) => {
      dispatch(setSlotFilter(filter, slot));
      dispatch(updateCardPickerSelection(slot));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPickerFilter);
