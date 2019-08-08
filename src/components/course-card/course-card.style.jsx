import styled, { css } from 'styled-components';

const aleatoryNumber = () => {
    return Math.floor((Math.random() * 300))
}

const CourseCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100px;
    background: linear-gradient(135deg, rgba(215, 247, 244, 0.8) 0%, rgba(${aleatoryNumber}, ${aleatoryNumber}, ${aleatoryNumber}, 0.8) 100%);
`;

export default CourseCardContainer;