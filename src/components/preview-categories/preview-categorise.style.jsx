import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

export const Header = styled.h2`
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
