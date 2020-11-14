btnSearch = document.getElementById('btn-search');
inputSearch = document.getElementById('input-search');

inputSearch.addEventListener('focusin', function(){
    btnSearch.classList.add('input-group-in');
})

inputSearch.addEventListener('focusout', function(){
    btnSearch.classList.remove('input-group-in');
})