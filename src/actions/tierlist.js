const tierlistUrlBase = 'http://thelightforge.com/api/TierList/Latest';

function createTierListUrl(locale) {
  var tierlistUrl = tierlistUrlBase + '?locale=' + locale;
  return 'http://crossorigin.me/' + tierlistUrl;
}

function notifyTierListReady() {
  return {
    type: 'NOTIFY_TIER_LIST_READY'
  };
}

function updateTierList(tierlist) {
  return {
    type: 'UPDATE_TIER_LIST',
    tierlist
  };
}

export function resetTierList() {
  return {
    type: 'RESET_TIER_LIST'
  };
}

export function requestTierList() {

  return (dispatch, getState) => {
    var state = getState();
    if (state.tierlist && state.tierlist.ready) {
      dispatch(notifyTierListReady());
    } else {
      fetch(createTierListUrl(state.locale))
        .then(resp => resp.json())
        .then(json => dispatch(updateTierList(json)))
        .then(() => dispatch(notifyTierListReady()))
    }
  };
}
