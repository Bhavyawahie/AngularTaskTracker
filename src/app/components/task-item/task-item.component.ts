import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;
	faTimes:IconDefinition = faTimes;
	constructor() { 
		this.task = {
			text: "", 
			day: "", 
			reminder: false
		};
	}

	ngOnInit(): void {
	}

}
