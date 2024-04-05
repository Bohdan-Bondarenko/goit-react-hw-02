const Feedback = ({ feedbackTypes, totalFeedback }) => {
    const positivePercentage = Math.round(
      ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
    );
    return (
      <div className="container-options">
        <h2>Feedback Statistics</h2>
  
        <p>Good: {feedbackTypes.good}</p>
        <p>Neutral: {feedbackTypes.neutral}</p>
        <p>Bad: {feedbackTypes.bad}</p>
        <p>Total Feedback: {totalFeedback}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    );
  };
  
  export default Feedback;