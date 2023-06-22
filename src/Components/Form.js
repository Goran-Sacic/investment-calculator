import React, { useState } from "react";
import Buttons from "./Buttons";
import InvestmentCalculator from "./InvestmentCalculator";

export default function Form() {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    investmentDuration: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCurrentSavingsChange = (e) => {
    setInvestmentData({ ...investmentData, currentSavings: e.target.value });
  };
  const handleYearlyContributionChange = (e) => {
    setInvestmentData({
      ...investmentData,
      yearlyContribution: e.target.value,
    });
  };
  const handleExpectedInterestChange = (e) => {
    setInvestmentData({ ...investmentData, expectedReturn: e.target.value });
  };
  const handleInvestmentDurationChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInvestmentData({
        ...investmentData,
        investmentDuration: e.target.value,
      });
    } else {
      alert("Unesi cijeli broj!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      currentSavings,
      yearlyContribution,
      expectedReturn,
      investmentDuration,
    } = investmentData;
    if (
      currentSavings &&
      yearlyContribution &&
      expectedReturn &&
      investmentDuration
    ) {
      setSubmitted(true);
    } else {
      alert("Molimo vas da unesete sva polja.");
    }
  };

  const resetForm = (e) => {
    setInvestmentData({
      currentSavings: "",
      yearlyContribution: "",
      expectedReturn: "",
      investmentDuration: "",
    });
    setSubmitted(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Početna ušteđevina (€)</label>
            <input
              type="number"
              id="current-savings"
              value={investmentData.currentSavings}
              min="0"
              onChange={handleCurrentSavingsChange}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Godišnja ušteđevina (€)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={investmentData.yearlyContribution}
              min="0"
              onChange={handleYearlyContributionChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Očekivana kamata (%)</label>
            <input
              type="number"
              id="expected-return"
              value={investmentData.expectedReturn}
              min="0"
              onChange={handleExpectedInterestChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Trajanje ulaganja (godine)</label>
            <input
              type="number"
              id="duration"
              value={investmentData.investmentDuration}
              min="0"
              onChange={handleInvestmentDurationChange}
            />
          </p>
        </div>
        <div className="actions">
          <Buttons resetForm={resetForm} />
        </div>
      </form>
      {submitted && <InvestmentCalculator investmentData={investmentData} />}
      {!submitted && (
        <div className="placeholder-div">Čekam unos podataka...</div>
      )}
    </div>
  );
}
