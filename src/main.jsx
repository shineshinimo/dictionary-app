import './index.css';
import { createRoot } from 'react-dom/client'
import { TermList } from './TermList.jsx';

function saveTermList(terms) {
  localStorage.setItem('termList', JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem('termList');

  if(!rawTermList) {
    return [];
  }

  return JSON.parse(rawTermList);
}

const descriptionListEl = document.getElementById('description-list');
const reactRoot = createRoot(descriptionListEl);

let terms = restoreTermList();

function syncTermList() {
  saveTermList(terms)
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />)
}

function addTerm(title, descr) {
  terms.push({
    id: Date.now(),
    title,
    descr
  });

  terms.sort((term1, term2) => term1.title < term2.title ? -1: 1);

  syncTermList();
}

function deleteItem(id) {
  terms = terms.filter(term => term.id !== id);

  syncTermList();
}

const form = document.getElementById('add-description');

syncTermList();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const descr = form.elements['description'].value;

  form.reset();

  addTerm(title, descr);
})
