import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    height: calc(100% + 50px);
    width: 100%;

`

const styledHeader = styled.h2`
    font-size: 3.6 rem;
`
function ContentSection(props){
    return(
        <StyledSection id={props.id}>
            {props.children}
        </StyledSection>
    );
}

export default ContentSection;