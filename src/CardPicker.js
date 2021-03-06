import React, { Component } from 'react';
import CardPickerFilter from './CardPickerFilter';
import CardPickerList from './CardPickerList';

export default (props) => {
  return (
    <div className="card-picker">
      <CardPickerFilter {...props} />
      <CardPickerList {...props} />
    </div>
  );
}
