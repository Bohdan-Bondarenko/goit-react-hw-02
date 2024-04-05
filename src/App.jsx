import { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";
import Description from "./components/Description";
import "./App.css";


const App = () => {
   const initialFeedbackTypes = JSON.parse(
     localStorage.getItem("feedbackTypes")
   ) || {
     good: 0,
     neutral: 0,
     bad: 0,
   };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);
  
  useEffect(() => {
    localStorage.setItem("feedbackTypes", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);


  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevTypes) => ({
      ...prevTypes,
      [feedbackType]: prevTypes[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  
  return (
    <div>
      <Description />

      {totalFeedback > 0 ? (
        <div className="container">
          <div>
            <Options
              updateFeedback={updateFeedback}
              totalFeedback={totalFeedback}
              resetFeedback={resetFeedback}
            />
          </div>
          <Feedback
            feedbackTypes={feedbackTypes}
            totalFeedback={totalFeedback}
          />
        </div>
      ) : (
        <div>
          <Options updateFeedback={updateFeedback} />
          <Notification message="No feedback yet." />
        </div>
      )}
    </div>
  );
};

export default App;