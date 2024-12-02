import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  background-color: rgb(215, 230, 251);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterContact = styled.div`
  margin-right: 5rem;
  height: 5rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;

  & .icon {
    color: rgb(63, 69, 139);
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    .icon {
      font-size: 2rem;
    }
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CopyRightArea = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
