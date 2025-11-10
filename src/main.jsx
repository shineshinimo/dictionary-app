import './index.css';
import { createRoot } from 'react-dom/client'
import { TermList } from './TermList.jsx';

let terms = [];

function addTerm(title, descr) {
  terms.push({
    title,
    descr
  });

  terms.sort((term1, term2) => term1.title < term2.title ? -1: 1);

  reactRoot.render(<TermList terms={terms} />);
}

const form = document.getElementById('add-description');
const descriptionListEl = document.getElementById('description-list');
const reactRoot = createRoot(descriptionListEl);

reactRoot.render(<TermList terms={terms} />);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const descr = form.elements['description'].value;

  form.reset();

  addTerm(title, descr);
})
