function changeId(e) {
    let input = document.getElementById('taskId');
    const id = e.target.parentElement.getAttribute('id');
    input.setAttribute('value', id);
    document.forms['todoForm'].submit();
}
document.getElementById('main').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        document.getElementById('task').value = "delete"
        changeId(e)
    }
    if (e.target.classList.contains('testchek')) {
        document.getElementById('task').value = "update"

        if (e.target.checked) {
            document.getElementById('chekTask').value = '1';

        } else {
            document.getElementById('chekTask').value = '0';
        }
        changeId(e)
    }
});
