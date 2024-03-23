import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UiService {
	private displayAddTaskForm: boolean;
	private subject: Subject<any>;
	constructor() {
		this.displayAddTaskForm = false;
		this.subject = new Subject<any>();
	}

	toggleDisplayAddTaskForm(): void {
		this.displayAddTaskForm = !this.displayAddTaskForm;
		this.subject.next(this.displayAddTaskForm);
	}

	onToggle(): Observable<any> {
		return this.subject.asObservable();
	}
}
