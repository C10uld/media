import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      // really nice hook!
      //실제로 thunk를 실행 및 전달하고 업데이트할 함수
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
