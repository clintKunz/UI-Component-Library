import styled from '@emotion/styled';

export const ExplodingButton = styled.button(({...rest}) => ({...rest}), ({load}) => {
    if (load) return {
        backgroundColor: "blue"
    }
});