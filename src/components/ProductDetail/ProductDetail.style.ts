import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ImageContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
`;

export const Image = styled.img`
    width: 100%;
`;

export const ProductDescription = styled.div`
    width: 100%;
`;

export const ProductTitle = styled.h2`
    font-size: 24px;
    padding-top: 20px;
    font-family: 'Source Serif Pro', serif;
`;

export const MattressTypeContainer = styled.div`
    width: 99%;
    display: -webkit-inline-box;
`;

export const TypeContainer = styled.div`
    width: 33%;
`;

export const TypeButton = styled.div<{ selected: boolean } >`
    border: 1px solid grey;
    text-align: center;
    padding: 5px 0px;

    ${({ selected }) => selected && `
        background-color: #a6a19a;
    `}
`;

export const TypeTitle = styled.p<{ selected?: boolean }>`
    margin: 0; 
    color: #000;
    
    ${({ selected }) => selected && `
        color: #fff;
    `}
`;


export const AddToCartButton = styled(Button)`
    background-color: #d4aa63; 
    border-color: #d4aa63;
    margin-top: 53px;
    margin-bottom: 10px;
`;