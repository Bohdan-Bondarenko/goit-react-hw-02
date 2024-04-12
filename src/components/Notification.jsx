import css from "./Notification.module.css";

const Notifications = () => {
    return (
        <div className={css.noFeedbackContainer}>
            <span className={css.noFeedbackText}>No feedback yet</span>
        </div>
    );
};

export default Notifications