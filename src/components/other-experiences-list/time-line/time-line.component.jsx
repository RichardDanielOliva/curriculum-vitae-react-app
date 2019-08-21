import React from 'react';

import {getIconComponent} from '../../utils/icons.utils';

import {TimeLineContainer, Logo, Line} from './time-line.style';

const TimeLine = ({rowNumer, length}) =>{
    return(
        <TimeLineContainer>
            <Logo 
                width = "60px"
                height = "60px"
                >
                    {getIconComponent("others-experience")}
            </Logo>
            {
                (rowNumer < length-1) ? <Line height="160px"/> : ''
            }
        </TimeLineContainer>
    );
} 

export default TimeLine;