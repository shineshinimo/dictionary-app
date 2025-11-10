import { TermCard } from './TermCard.jsx';
import './TermList.css';

export const TermList = ({ terms, onDelete }) => {
    return (
        <ul className='term-list'>
            {terms.map((item) => (
                <li className='term-list__item' key={item.id}>
                    <TermCard 
                        title = {item.title}
                        descr = {item.descr}
                        onDelete = {onDelete}
                        id = {item.id}
                    />
                </li>
            ))}
        </ul>
    )
}