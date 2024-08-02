"use strict";

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
const upcomingTasksEl = document.querySelector(".todo-upcomingTasks-mainBox");
const upcomingTasksInput = document.getElementById("task-name_user-input");
const upcomingTaskHeading = document.querySelector(
	".todo-upcomingTasks-heading"
);

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

const addTask = (taskName) => {
	const upcomingTasks = document.createElement("div");
	upcomingTasks.classList.add("flex", "todo-upcomingTasks");
	upcomingTaskHeading.appendChild(upcomingTasks);

	const upcomingTaskLists = document.createElement("div");
	upcomingTaskLists.classList.add("flex", "upcomingTasks-lists");
	upcomingTasks.appendChild(upcomingTaskLists);

	const taskIndicator = document.createElement("img");
	taskIndicator.src = "./task-indicator.svg";
	taskIndicator.classList.add("task-indicator-icon");
	upcomingTaskLists.appendChild(taskIndicator);

	const taskInput = document.createElement("input");
	taskInput.classList.add("task-name");
	taskInput.value = taskName;
	upcomingTaskLists.appendChild(taskInput);

	const taskIcons = document.createElement("div");
	taskIcons.classList.add("flex", "tasks-icons");
	upcomingTasks.appendChild(taskIcons);

	const editIcon = document.createElement("img");
	editIcon.src = "./edit-task-icon.svg";
	editIcon.classList.add("edit-icon");
	taskIcons.appendChild(editIcon);

	const deleteIcon = document.createElement("img");
	deleteIcon.src = "./delete-icon.svg";
	deleteIcon.classList.add("delete-icon");
	taskIcons.appendChild(deleteIcon);
};

addTaskBtn.addEventListener("click", () => {
	const taskName = upcomingTasksInput.value.trim();
	if (taskName !== "") {
		addTask(taskName);
	}
});

upcomingTasksInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const taskName = upcomingTasksInput.value.trim();
		if (taskName !== "") {
			addTask(taskName);
		}
	}
});
