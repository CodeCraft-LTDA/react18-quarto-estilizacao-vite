import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f00;
`;

export const Title = styled.span<{ $color: string, $bgColor?: string}>`
    font-size: 20px;
    font-weight: 800;
    color: ${props => props.$color};
    background: ${props => props.$bgColor};
`;