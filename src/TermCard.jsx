import "./TermCard.css";

export const TermCard = ({ title, descr, onDelete, id }) => {
    const handleDeleteClick = () => {
        onDelete(id)
    }

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

            <button type="button" className="term-card__delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    );
}