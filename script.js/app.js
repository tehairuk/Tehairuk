function showDiscount() {
    var demoParagraph = document.getElementById('demo');
    if (demoParagraph.style.display === 'none') {
        demoParagraph.style.display = 'block';
    } else {
        demoParagraph.style.display = 'none';
    }
}