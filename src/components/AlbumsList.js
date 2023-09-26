import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  console.log(user.name);

  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);

  return <div>albums for {user.name}</div>;
}

export default AlbumsList;
