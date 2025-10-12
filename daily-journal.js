// Display Today's Date
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

// Load previous entry for today, if present
const dateKey = new Date().toISOString().slice(0,10); // Format: YYYY-MM-DD
const journalEntry = document.getElementById('journalEntry');
const saved = localStorage.getItem('journal-' + dateKey);
if(saved) {
    journalEntry.value = saved;
}

// Save the journal entry
document.getElementById('saveBtn').addEventListener('click', function() {
    localStorage.setItem('journal-' + dateKey, journalEntry.value);
    alert('Journal entry saved!');
});
