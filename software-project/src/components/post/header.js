import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function Header({ username, picture }) {


  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src='https://piceditorreview.com/wp-content/uploads/2021/10/Insta-pic-300x300.jpg'
            alt=''
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string
};
