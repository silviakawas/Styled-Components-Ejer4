import { useState } from "react";
import { StyledButton, StyledCalculator, StyledDays, StyledForm, StyledInput, StyledLabel, StyledMonths, StyledResult, StyledYears } from "./styles";

const Calculator = ()=>{

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [days, setDays] = useState('--');
    const [months, setMonths] = useState('--');
    const [years, setYears] = useState('--');

    const handleButtonClick = () =>{
        if (day && month && year) {
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();
            
            let calculatedDays = currentDay - day;
            let calculatedMonths = currentMonth - month;
            let calculatedYears = currentYear - year;

            if (calculatedMonths < 0){
                calculatedYears -= 1;
                calculatedMonths += 12;
            }
            if (calculatedDays < 0){
                calculatedMonths -= 1;
                const lastDayOfPreviousMonth = new Date(year, month -1, 0).getDate();
                calculatedDays += lastDayOfPreviousMonth;
            }

            setDays(calculatedDays.toString());
            setMonths(calculatedMonths.toString());
            setYears(calculatedYears.toString());
            
        };
    };

    return(

        <>
            <StyledCalculator>
                <StyledForm>
                    <div className="containerForm">
                        <StyledLabel>DAY</StyledLabel>
                        <StyledInput type='text' onChange={e => {setDay(e.target.value)}}></StyledInput>
                    </div>
                    <div className="containerForm">
                        <StyledLabel>MONTH</StyledLabel>
                        <StyledInput type='text' onChange={e => {setMonth(e.target.value)}}></StyledInput>
                    </div>
                    <div className="containerForm">
                        <StyledLabel>YEAR</StyledLabel>
                        <StyledInput type='text' onChange={e => {setYear(e.target.value)}}></StyledInput>
                    </div>
                </StyledForm>
                <div className="containerButton">
                    <hr />
                    <StyledButton onClick={handleButtonClick}>
                        <img src="./public/icon-arrow.svg" alt="Arrow" />
                    </StyledButton>
                </div>
                
            </StyledCalculator>
            <StyledResult>
                <StyledYears><span>{days}</span> years</StyledYears>
                <StyledMonths><span>{months}</span> months</StyledMonths>
                <StyledDays><span>{years}</span> days</StyledDays>
            </StyledResult>
        </>

        

        

    );

};

export default Calculator;