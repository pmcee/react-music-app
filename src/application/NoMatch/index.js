import React from 'react';
import {Outlet} from "react-router-dom";

function NoMatch(props) {
  return (
    <div>
      <span>NoMatch: 404</span>
      <Outlet />
    </div>
  );
}

export default React.memo(NoMatch);