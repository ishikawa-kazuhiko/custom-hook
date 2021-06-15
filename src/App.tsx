import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  //getUsers:関数、userProfiles, loading, errorの３つはstate(useStateで定義してある)
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  //下のgetUsersは、上のuseAllUsersの中にある関数
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
