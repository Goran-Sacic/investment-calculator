export default function Buttons({ resetForm, submitClicked }) {
  const handleReset = (e) => {
    resetForm();
  };

  return (
    <p className="actions">
      <button type="reset" className="buttonAlt" onClick={handleReset}>
        Reset
      </button>
      <button type="submit" className="button">
        Izračunaj
      </button>
    </p>
  );
}
