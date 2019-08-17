import styled, { css } from 'styled-components';

export const basicIcon = css`
    border-radius: 100%;
    fill: rgb(0, 0, 0);
    `;
    
export const circleIcon = css`
    border-radius: 100%;
    fill: rgb(255, 255, 255);
    background-color: rgba(0, 156, 143,1);
    padding: 12px;
    `;   
     
export const icon = css`
    ${basicIcon}
    &:hover {
        fill: rgb(0, 156, 143);
      }
    `;

export const selectedIcon = css`
    border-radius: 100%;
    fill: rgb(0, 156, 143);
    `;