import React from 'react'
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Error() {
  return (
    <div className='error-container'>
      <p>Whoops... somethings gone wrong!</p>
      <Link to="/">
        <button className={'individual-stadium-home-button'}>
          <FontAwesomeIcon className="button-icon" icon={faHome} />
        </button>
      </Link>
    </div>
  )
}
