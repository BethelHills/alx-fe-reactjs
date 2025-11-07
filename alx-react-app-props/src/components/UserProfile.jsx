import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = (props) => {
  const contextUser = useContext(UserContext);
  const name = props.name || (contextUser && contextUser.name) || 'Unknown';
  const email = props.email || (contextUser && contextUser.email) || null;

  return (
    <div>
      <h2>{name}</h2>
      {email && <p>Email: {email}</p>}
      {props.age && <p>Age: {props.age}</p>}
      {props.bio && <p>Bio: {props.bio}</p>}
    </div>
  );
};

export default UserProfile;

