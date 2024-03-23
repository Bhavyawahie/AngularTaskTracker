import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Task } from "../../Task";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
	selector: "app-add-task",
	templateUrl: "./add-task.component.html",
	styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
	text: string;
	day: string;
	reminder: boolean;
	displayAddTaskForm: boolean = false;
	subscription: Subscription;
	@Output()
	onAddTask: EventEmitter<Task> = new EventEmitter();
	constructor(private uiService: UiService) {
		this.text = "";
		this.day = "";
		this.reminder = false;
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.displayAddTaskForm = value));
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
