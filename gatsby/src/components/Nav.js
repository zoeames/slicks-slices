import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlcieMaster() {
  setTimeout(() => {
    console.log('go to slicemasters');
    navigate('/slicemasters', { replace: true });
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <button type="button" onClick={goToSlcieMaster}>
          go to slicemasters after 2 seconds
        </button>
      </li>
    </nav>
  );
}
