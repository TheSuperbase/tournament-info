import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

const useClientMount = () => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // 클라이언트에서는 true
    () => false // 서버에서는 false
  );
};

export default useClientMount;
