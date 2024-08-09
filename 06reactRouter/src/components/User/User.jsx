import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  // Now you can use the id to fetch data or perform other actions

  return (
    <div>User ID: {id}</div>
  );
}

export default User;