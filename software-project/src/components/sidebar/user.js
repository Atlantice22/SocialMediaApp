import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import FirebaseContext from '../../context/firebase';



export default function User({ username }) {

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  return !username  ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={user.photoURL}
          alt=""
         
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string,
};
