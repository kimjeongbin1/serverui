function toggleDeleteButton() {
    var checkboxes = document.querySelectorAll('.mail-item input[type="checkbox"]');
    var deleteButton = document.querySelector('.delete-button');

    var checkedCount = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount > 0) {
        deleteButton.style.display = 'inline-block';
    } else {
        deleteButton.style.display = 'none';
    }
}

function deleteSelected() {
    var checkboxes = document.querySelectorAll('.mail-item input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            // 복사할 내용을 가져옴
            var mailContent = checkbox.closest('.mail-item').outerHTML;

            // 이메일 삭제 부분을 주석 처리
            // checkbox.closest('.mail-item').remove();

            // 가져온 내용을 trash-list에 추가
            addToTrash(mailContent);
        }
    });

    // 삭제 버튼 숨김
    var deleteButton = document.querySelector('.delete-button');
    deleteButton.style.display = 'none';
}

function addToTrash(content) {
    // 새로운 <li> 요소를 생성하고, 선택된 이메일의 내용을 넣습니다.
    var newMailItem = document.createElement('li');
    newMailItem.innerHTML = content;

    // trash-list에 새로운 이메일 항목을 추가합니다.
    var trashList = document.getElementById('trash-list');
    trashList.appendChild(newMailItem);
}

function toggleSelectAll() {
    var selectAllCheckbox = document.getElementById('selectAll');
    var checkboxes = document.querySelectorAll('.mail-item input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });

    // Update the delete button visibility based on the state of the checkboxes
    toggleDeleteButton();
}