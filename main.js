"use strict";

// *********INITIAL SCREEN***********

// Initializing the variables
const editHeading = document.querySelector(".edit-pen-icon");
const initialHeading = document.querySelector(".initial-heading__todo-wrapper");
const afterHeading = document.querySelector(".after-heading__todo-wrapper");

// Handling editable heading clicks
editHeading.addEventListener("click", () => {
	initialHeading.classList.add("hide");
	const headingContent = initialHeading.textContent;
	afterHeading.classList.remove("hide");
	afterHeading.value = headingContent;
});

afterHeading.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		initialHeading.textContent = afterHeading.value;
		initialHeading.classList.remove("hide");
		afterHeading.classList.add("hide");
	}
});

// *********AFTER SCREEN***********

const initialImage = document.querySelector(".initial-screen-add");
const addTaskIcon = document.querySelector(".initial-screen-add-icon");
const afterAddNewTask = document.querySelector(".after-icon-new-task");
const tasksLists = document.querySelector(".list-tasks");
const addTaskBtn = document.querySelector(".add-task-btn");
const mainUp = document.querySelector(".todo-upcomingTasks-mainBox");
const upcomingTasksInput = document.getElementById("task-name_user-input");
const upcomingTaskWrapper = document.querySelector(
	".todo-upcomingTasks-wrapper"
);
const upcomingTaskHeading = document.querySelector(
	".todo-upcomingTasks-heading"
);
const finishedMain = document.querySelector(".todo-finishedTasks-mainBox");
const finishedTaskHeading = document.querySelector(
	".todo-finishedTasks-heading"
);
const finishWrap = document.querySelector(".todo-finishedTasks-wrapper");

// Adding tasks in list
addTaskIcon.addEventListener("click", function () {
	initialImage.classList.add("hide");
	addTaskIcon.classList.add("hide");
	afterAddNewTask.classList.remove("hide");
});

tasksLists.addEventListener("click", function () {
	tasksLists.style.outline = "none";
	tasksLists.style.border = "none";
});

// FUNCTION FOR CREATING UPCOMING TASK DYNAMICALLY

const addTask = (taskName) => {
	const upcomingTasks = document.createElement("div");
	upcomingTasks.classList.add("flex", "todo-upcomingTasks");
	upcomingTaskWrapper.appendChild(upcomingTasks);

	const upcomingTaskLists = document.createElement("div");
	upcomingTaskLists.classList.add("flex", "upcomingTasks-lists");
	upcomingTasks.appendChild(upcomingTaskLists);

	const taskIndicator = document.createElement("img");
	taskIndicator.src = "./task-indicator.svg";
	taskIndicator.classList.add("task-indicator-icon");
	upcomingTaskLists.appendChild(taskIndicator);

	const taskInput = document.createElement("p");
	taskInput.classList.add("task-name");
	taskInput.textContent = taskName;
	upcomingTaskLists.appendChild(taskInput);

	const taskIcons = document.createElement("div");
	taskIcons.classList.add("flex");
	upcomingTasks.appendChild(taskIcons);

	const editIcon = document.createElement("img");
	editIcon.src = "./edit-task-icon.svg";
	editIcon.classList.add("edit-icon");
	taskIcons.appendChild(editIcon);

	const deleteIcon = document.createElement("img");
	deleteIcon.src = "./delete-icon.svg";
	deleteIcon.classList.add("delete-icon");
	taskIcons.appendChild(deleteIcon);

	const pCurrentTask = document.createElement("input");
	pCurrentTask.classList.add("task-name", "hide");
	upcomingTaskLists.appendChild(pCurrentTask);

	editIcon.addEventListener("click", () => {
		taskInput.classList.add("hide");
		pCurrentTask.classList.remove("hide");
		pCurrentTask.value = taskInput.textContent;
		pCurrentTask.focus();
	});

	pCurrentTask.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			const currentTaskEdit = pCurrentTask.value;
			taskInput.textContent = currentTaskEdit;
			pCurrentTask.classList.add("hide");
			taskInput.classList.remove("hide");
			pCurrentTask.blur();
		}
	});

	taskIndicator.addEventListener("click", function () {
		if (taskIndicator.src.includes("task-indicator.svg")) {
			finishedMain.classList.remove("hide");
			finishedTaskHeading.classList.remove("hide");

			finishWrap.appendChild(upcomingTasks);

			upcomingTasks.style.backgroundColor = "#af7ad5";
			taskInput.style.backgroundColor = "#af7ad5";
			taskInput.style.textDecoration = "line-through";
			editIcon.style.display = "none";
			taskIndicator.src = "./checkmark.svg";

			const upTaskTrackerAfter = upcomingTaskWrapper.querySelectorAll(
				".todo-upcomingTasks"
			);

			if (upTaskTrackerAfter.length === 0) {
				upcomingTaskHeading.classList.add("hide");
			}
		} else if (taskIndicator.src.includes("checkmark.svg")) {
			upcomingTaskHeading.classList.remove("hide");
			upcomingTaskWrapper.appendChild(upcomingTasks);

			upcomingTasks.style.backgroundColor = "";
			taskInput.style.backgroundColor = "";
			taskInput.style.textDecoration = "";
			editIcon.style.display = "";
			taskIndicator.src = "./task-indicator.svg";

			const finishedTaskTracker = finishWrap.querySelectorAll(
				".todo-upcomingTasks"
			);

			if (finishedTaskTracker.length === 0) {
				finishedTaskHeading.classList.add("hide");
			}
		}
	});

	deleteIcon.addEventListener("click", function () {
		upcomingTasks.remove();

		const upTaskTrackerAfter = upcomingTaskWrapper.querySelectorAll(
			".todo-upcomingTasks"
		);

		if (upTaskTrackerAfter.length === 0) {
			upcomingTaskHeading.classList.add("hide");
		}

		const finishedTaskTracker = finishWrap.querySelectorAll(
			".todo-upcomingTasks"
		);

		if (finishedTaskTracker.length === 0) {
			finishedTaskHeading.classList.add("hide");
		}
	});
};

addTaskBtn.addEventListener("click", () => {
	const taskName = upcomingTasksInput.value.trim();

	mainUp.classList.remove("hide");
	if (taskName !== "") {
		addTask(taskName);
	}
	upcomingTasksInput.value = "";
});

upcomingTasksInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const taskName = upcomingTasksInput.value.trim();

		mainUp.classList.remove("hide");
		if (taskName !== "") {
			addTask(taskName);
		}
		upcomingTasksInput.value = "";
	}
});
