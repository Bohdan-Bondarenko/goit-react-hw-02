import css from "./Description.module.css";

const Description = () => {
    return (
        <div className={css.descriptionContainer}>
            <h1 className={css.descriptionTitle}>Sip Happens Café</h1>
            <p className={css.descriptionParagraf}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    );
};

export default Description