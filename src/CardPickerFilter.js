import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCardPickerSelection, setSlotFilter, clearSlots } from './actions/cardpicker';

class CardPickerFilter extends Component {

  render() {

    const { onFilterChange, onKeyUp, slot, filter } = this.props;

    return (
      <div className="form-group">
        <input className="form-control" type="text"
            value={filter}
            placeholder={"Enter " + slot + " card ..."}
            onKeyUp={onKeyUp}
            onChange={onFilterChange} />
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

function mapDispatchToProps(dispatch, props) {
  const { slot } = props;
  return {
    onFilterChange: (e) => {
      dispatch(setSlotFilter(e.target.value, slot));
      dispatch(updateCardPickerSelection(slot));
    },
    onKeyUp: (e) => {
      if (e.keyCode == 27) {
        e.preventDefault();
        dispatch(clearSlots());
        return false;
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPickerFilter);
