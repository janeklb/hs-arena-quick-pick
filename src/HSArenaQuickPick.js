import React from 'react';

import Deck from './Deck';
import CardPicker from './CardPicker';
import HeroPicker from './HeroPicker';

export default (props) => {
  return (
    <div>
      <div>
        <h1>
          Hearthstone Arena Quick Pick
          <div className="form-inline" style={{ display: 'inline-block', marginLeft: '14px' }}>
            <HeroPicker />
          </div>
        </h1>
        <p>
          Powered by <a href="http://thelightforge.com/TierList" target="_blank">The Light Forge Tier List</a>
        </p>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-4">
              <CardPicker slot="first" />
            </div>
            <div className="col-sm-4">
              <CardPicker slot="second" />
            </div>
            <div className="col-sm-4">
              <CardPicker slot="third" />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <Deck />
        </div>
      </div>
    </div>
  );
}
