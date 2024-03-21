import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IconDefinition, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../Task";

@Component({
	selector: "app-task-item",
	templateUrl: "./task-item.component.html",
	styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;
	@Output()
	onDelete: EventEmitter<Task> = new EventEmitter();
	@Output()
	onToggleReminder: EventEmitter<Task> = new EventEmitter();

	faTimes: IconDefinition = faTimes;

	constructor() {
		this.task = {
			text: "",
			day: "",
			reminder: false,
		};
	}

	ngOnInit(): void {}

	onTaskItemDoubleClick(task: Task): void {
		this.onToggleReminder.emit(task);
	}

	onDeleteBtnClick(task: Task): void {
		this.onDelete.emit(task);
	}
}
