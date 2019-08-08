import styled, { css } from 'styled-components';

export const basicIcon = css`
    border-radius: 100%;
    fill: rgb(0, 0, 0);
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