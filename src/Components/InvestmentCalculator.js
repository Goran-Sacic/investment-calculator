import React from "react";

export default function InvestmentCalculator({ investmentData }) {
  /* const { currentSavings, yearlyContribution, expectedReturn, investmentDuration } = investmentData; */
  const yearlyData = [];
  let currentSavings = parseFloat(investmentData.currentSavings);
  const yearlyContribution = parseFloat(investmentData.yearlyContribution);
  const expectedReturn = parseFloat(investmentData.expectedReturn) / 100;
  const duration = parseInt(investmentData.investmentDuration);
  let totalInterest = 0;
  let totalInvestedCapital = 0;
  let startingSavings = parseFloat(investmentData.currentSavings);
  let yearlyContributionTotal = 0;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    totalInterest += yearlyInterest;
    yearlyContributionTotal += yearlyContribution;
    totalInvestedCapital = startingSavings + yearlyContributionTotal;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest.toFixed(2),
      savingsEndOfYear: currentSavings.toFixed(2),
      yearlyContribution: yearlyContribution,
      totalInterestCalculated: totalInterest.toFixed(2),
      totalInvestedCapitalCalculated: totalInvestedCapital.toFixed(2),
    });
  }

  if (currentSavings && yearlyContribution && expectedReturn && duration) {
    return (
      <div>
        <table className="result">
          <thead>
            <tr>
              <th>Početna ušteđevina: </th>
              <th>Godišnja ušteđevina: </th>
              <th>Očekivana kamata: </th>
              <th>Trajanje ulaganja: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>€{investmentData.currentSavings}</th>
              <th>€{investmentData.yearlyContribution}</th>
              <th>{investmentData.expectedReturn}%</th>
              <th>{investmentData.investmentDuration} god.</th>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Godina</th>
              <th>Ukupna ušteđevina</th>
              <th>Kamata (godišnje)</th>
              <th>Ukupna kamata</th>
              <th>Uloženi kapital</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((x, index) => (
              <tr key={index}>
                <td>{x.year}</td>
                <td>€{x.savingsEndOfYear}</td>
                <td>€{x.yearlyInterest}</td>
                <td>€{x.totalInterestCalculated}</td>
                <td>€{x.totalInvestedCapitalCalculated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div className="placeholder-div">Čekam unos podataka...</div>;
  }
}
