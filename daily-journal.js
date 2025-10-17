document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

const dateKey = new Date().toISOString().slice(0,10); 
const journalEntry = document.getElementById('journalEntry');
const saved = localStorage.getItem('journal-' + dateKey);
if(saved) {
    journalEntry.value = saved;
}

document.getElementById('saveBtn').addEventListener('click', function() {
    localStorage.setItem('journal-' + dateKey, journalEntry.value);
    alert('Journal entry saved!');
});
