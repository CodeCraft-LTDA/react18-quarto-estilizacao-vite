import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

// export const Card = styled.div`
//   width: 200px;
//   height: 300px;
//   background-color: #f00;
// `;

export const Card = styled.div(() => ({
    width: 200,
    height: 300,
    backgroundColor: "#f00"
}))


// export const Title = styled.span<{ $color: string, $bgColor?: string}>`
//     font-size: 20px;
//     font-weight: 800;
//     color: ${props => props.$color};
//     background: ${props => props.$bgColor};
// `;

interface TitleProps {
    $color: string,
    $bgColor?: string,
    children: ReactNode
}

export const Title: FunctionComponent<TitleProps> = styled.span(props => ({
    fontSize: 20,
    fontWeight: 800,
    color: props.$color,
    background: props.$bgColor
}))