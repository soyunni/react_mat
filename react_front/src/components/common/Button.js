import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyleButton = styled.button`
    border:none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        backgroun: ${palette.gray[6]};
    }
`;

const Button = props => <StyleButton {...props} />;

export default Button;