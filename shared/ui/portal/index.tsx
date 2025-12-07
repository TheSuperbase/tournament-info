import useClientMount from "@/shared/hooks/use-client-mount";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

/**
 * @description
 * - React Portal을 사용하여 컴포넌트를 DOM 트리 외부의 특정 노드(#portal-root)에 렌더링합니다.
 * - 모달, 알림 등 오버레이 UI를 구현할 때 사용됩니다.
 * @note
 * - `#portal-root`는 `_document.tsx`또는 `layout.tsx`에 정의되어있어야 합니다.
 * - 클라이언트 환경에서만 동작하도록 `useEffect`를 사용하였습니다.
 * @example
 * - <Portal>
 *    <div>포탈로 렌더링된 내용</div>
 *   </Portal>
 */

const Portal = ({ children }: PortalProps) => {
  const isMounted = useClientMount();

  if (!isMounted) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.error("(#portal-root)가 존재하지 않습니다.");
    return null;
  }

  return createPortal(children, portalRoot);
};
export default Portal;
