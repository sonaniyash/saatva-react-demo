import styled from 'styled-components';

export const HeaderContainer = styled.div` 
    background-color: #fff; 
    padding: 20px 10%;
    border-bottom: 2px solid #e3e3e3;
`;

export const Title = styled.h3`
    color: #c19579;
    font-size: 24px;
    margin: 0;
`;

export const CartIcon = styled.img`
    height: 28px;
`;

export const CartNumber = styled.p`
    position: absolute;
    top: 0;
    right: 7px;
    background-color: #c1967a;
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: 10px;
    color : #fff;
    font-size: 13px;
`;