import styled from 'styled-components';
import { Section } from 'components/atoms/Section/Section';

export const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MessageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  h3 {
    font-size: 3rem;
  }
`;
