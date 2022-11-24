import React from "react";

export function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>    
        </>
    )
}
