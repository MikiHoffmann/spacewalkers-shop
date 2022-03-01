import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 30em;
    margin: 0 auto;
    padding: 1.3em;
    background-color: ${({theme}) => theme.colors.bgClr};
    box-shadow: ${({theme}) => theme.colors.boxShdwRght};
    label {
        margin-top: 1em;
    }
    input {
        margin-top: .5em;
        padding: .2em;
        background-color: transparent;
        border: none;
        border-left: .05em solid rgb(255,255,255);
        border-bottom: .05em solid rgb(255,255,255);
        ::placeholder {
            color: ${({theme}) => theme.colors.clr};
        }
    }
    .buttonContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .5em;
        padding-top: 1.5em;
        .cancelButton {
            grid-column: 1;
        }
        .confirmButton {
            grid-column: 2;
        }
    }
`