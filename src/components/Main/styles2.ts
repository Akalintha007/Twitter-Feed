import styled from 'styled-components';



export const Container = styled.div`

display: none;

@media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
}

`;


export const SearchInput = styled.input`

width: 250px;
height: 39px;
font-size: 14px;
padding: 0 10px 0 52px;


background: var(--search);

&::placeholder {
    color: var(--outline);
}

~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
}

outline: 0;

&:focus{
    border: 1px solid var(--twitter);

    ~ svg {
        fill: var(--twitter);
    }
}

`;
export const Body = styled.div`

display: flex;
flex-direction: column;
padding: 57px 24px 200px;
margin-top: 3px;

> div + div {
    margin-top: 15px;
}

`;



