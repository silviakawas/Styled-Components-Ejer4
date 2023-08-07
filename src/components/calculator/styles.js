import styled from "styled-components";


const StyledCalculator = styled.div`
    padding: 50px;
`;

const StyledResult = styled.div`
    padding: 10px 50px;
    display: flex;
    flex-direction: column;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const StyledLabel = styled.label`
    font-size: 14px;
    letter-spacing: 2px;
    color: gray;
    font-weight: 700;
`;

const StyledInput = styled.input`
    padding: 10px;
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 700;
    border-radius: 5px;
    border: 1px solid lightgray;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 75px;
    border-radius: 100%;
    border: 0;
    background-color: #854DFF;
    cursor: pointer;
    :hover{
        background-color: black;
    }
`;

const StyledYears = styled.p`
    font-size: 74px;
    font-weight: 900;
    font-style: italic;
    margin: 0;
`;

const StyledMonths = styled.p`
    font-size: 74px;
    font-weight: 900;
    font-style: italic;
    margin: 0;
`;

const StyledDays = styled.p`
    font-size: 74px;
    font-weight: 900;
    font-style: italic;
    margin: 0;
`;



export {StyledCalculator, StyledResult, StyledForm, StyledLabel, StyledInput, StyledYears, StyledMonths, StyledDays, StyledButton};