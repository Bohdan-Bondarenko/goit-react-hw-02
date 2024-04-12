import css from "./Feedback.module.css";

const Feedback = ({ feedback, posFeedback, totalFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      <span className={css.feedbackText}>Good:{feedback.good}</span>
      <span className={css.feedbackText}>Neutral:{feedback.neutral}</span>
      <span className={css.feedbackText}>Bad:{feedback.bad}</span>
      <span className={css.feedbackText}>Total point:{totalFeedback}</span>
      <span className={css.feedbackText}>Percentage of reviews:{posFeedback}%</span>
    </div>        
  );
};

export default Feedback