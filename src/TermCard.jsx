import "./TermCard.css";

export const TermCard = ({ title, descr }) => {
    return(
        <div className="term-card">
            <h2 className="term-card__title">
                {title}
            </h2>

            { descr && (
                <p className="term-card__descr">
                    {descr}
                </p>
            )}
        </div>
    );
}