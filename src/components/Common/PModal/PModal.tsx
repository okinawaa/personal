import * as Svgs from "@svgs/common";
import { RefObject, useEffect, useRef, useCallback } from "react";
import { closeModal } from "~/store/ducks/root/rootSlice";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import * as Styled from "./PModal.style";

interface PModalProps {
  children: React.ReactNode;
}

const PModal = ({ children }: PModalProps) => {
  const modalDimRef: RefObject<HTMLDivElement> = useRef(null);
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(({ root }) => root.showModal);

  const dimClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (modalDimRef.current && e.target === modalDimRef.current) {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  // 모달창 열리면 스크롤 안 되게 처리
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Styled.Container
      ref={modalDimRef}
      show={showModal}
      onClick={dimClickHandler}
    >
      <Styled.CloseButtonWrapper
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <Svgs.Close />
      </Styled.CloseButtonWrapper>
      {children}
    </Styled.Container>
  );
};

export default PModal;
