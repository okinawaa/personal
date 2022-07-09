import * as Svgs from "@svgs/common";
import { closeModal } from "~/store/ducks/root/rootSlice";
import { useAppDispatch } from "~/store/hooks";
import * as Styled from "./ModalLayout.style";

interface ModalLayoutProps {
  children: React.ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProps) => {
  const dispatch = useAppDispatch();
  return (
    <Styled.Container>
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

export default ModalLayout;
