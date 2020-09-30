import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`

export const H2 = styled.h2`
  text-align: center;
  color: ${(pr) => pr.theme.colors.c_h2};
  font-size: ${(pr) => pr.theme.fontsizes.fs_h};
  margin-bottom: 6.8rem;
`;