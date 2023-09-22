import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false); //Load 중인지 여부 추적 true라면 skeleton loader를 표시
  const [loadingUsersError, setLoadingUsersError] = useState(null); // 오류가 발생하면(not null) 오류 메시지 표시
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    // 위에서 Loading 과 Error를 관리하기 때문에 이 부분은 수정됐다.
    return state.users; // {data: [], isLoading: false, error: null}
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      /* 요청이 성공했을 때나 실패했을 때,
        isLoadingUsers / loadingUsersError 함수를 사용해서 상태를 로드하고,
        업데이트할 수 있다는 것. fetchUsers.js 에서 get test 진행. */
      // console.log("성공");
      .catch((err) => setLoadingUsersError(err))
      // console.log("실패");
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User"
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error creating user"}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
