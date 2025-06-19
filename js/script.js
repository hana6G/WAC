function filterHymns() {
    const query = document.getElementById('search').value.toLowerCase();
    const hymns = document.querySelectorAll('#hymn-list li');
    hymns.forEach(hymn => {
        const text = hymn.textContent.toLowerCase();
        hymn.style.display = text.includes(query) ? '' : 'none';
    });
}
