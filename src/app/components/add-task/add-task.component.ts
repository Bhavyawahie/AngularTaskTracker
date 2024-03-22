import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Task } from "../../Task";

@Component({
	selector: "app-add-task",
	templateUrl: "./add-task.component.html",
	styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
	text: string;
	day: string;
	reminder: boolean;
	@Output()
	onAddTask: EventEmitter<Task> = new EventEmitter();
	constructor() {
		this.text = "";
		this.day = "";
		this.reminder = false;
	}

	ngOnInit(): void {}
	onSubmit() {
		if (!this.text) {
			alert("Please add a task!");
		}

		const newTask: Task = {
			text: this.text,
			day: this.day,
			reminder: this.reminder,
		};

		this.onAddTask.emit(newTask);

		this.text = "";
		this.day = "";
		this.reminder = false;
	}
}
