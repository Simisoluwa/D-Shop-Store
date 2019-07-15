import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background: rgb(224, 204, 178);

    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`

export const OptionLink = styled(Link)`
    ${optionContainerStyles}
`

export const OptionDiv = styled.div`
    ${optionContainerStyles}
`