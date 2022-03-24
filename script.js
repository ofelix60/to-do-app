const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const taskItemContainer = document.getElementById('to-do');
const clearBtn = document.getElementById('clear-all-btn');

addBtn.addEventListener('click', function (e) {
	e.preventDefault();
	let todoTask = taskInput.value.trim();
	if (todoTask !== '') {
		taskItemContainer.innerHTML += `<div class="task-container">
						<p>${todoTask}</p>
                        <div class="btns">
						<button id="complete">☑</button>
						<button id="delete">ˣ</button>
					</div>
					</div>
					`;
		todoTask = '';
		taskInput.value = '';
	}
});

taskItemContainer.addEventListener('click', function (e) {
	if (e.target.id === 'delete') {
		console.log(e.target.closest('.task-container'));
		e.target.closest('.task-container').remove();
	}

	if (e.target.id === 'complete') {
		if (e.target.innerText == '☑') {
			let el = e.target.closest('.task-container').children[0];
			el.classList.add('complete');
			e.target.innerText = '↩';
			return;
		}

		if (e.target.innerText == '↩') {
			let el = e.target.closest('.task-container').children[0];
			el.classList.remove('complete');
			e.target.innerText = '☑';
			return;
		}
	}
});

clearBtn.addEventListener('click', e => {
	taskItemContainer.innerHTML = '';
});
