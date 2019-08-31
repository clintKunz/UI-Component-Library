import styled from '@emotion/styled';

export const Button = styled.button(({width, height, color, backgroundColor, fontSize }) => ({
    width,
    height,
    color,
    backgroundColor,
    fontSize
}), ({onClick}) => ({onClick}), ({load}) => {
    if (load) return {
        ".hide": {
            display: "block"
        },
        ".show": {
            display: "none"
        }
    }
    else return {
        ".hide": {
            display: "none"
        },
        ".show": {
            display: "block"
        }
    }
});