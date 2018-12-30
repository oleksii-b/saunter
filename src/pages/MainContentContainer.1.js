import React from 'react';

import MainContent from './MainContent';
// import util from '../services/util';


// let currentPathId = null;

export default function MainContentContainer(props) {
  const urlId = new URLSearchParams(props.location.search).get('id');

  // if (typeof urlId !== 'undefined' && urlId !== currentPathId) {
  //   currentPathId = urlId;

  //   const queryString = util.getQueryString('id', currentPathId);

  //   props.history.push(`${props.location.pathname}${queryString}`);
  // }

  return (
    <MainContent />
  );
}
