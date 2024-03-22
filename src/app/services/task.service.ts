import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../Task";
import { TASKS } from "../sample-tasks";
import { Observable, of } from "rxjs";

const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": "application/json",
	}),
};
@Injectable({
	providedIn: "root",
})
export class TaskServiceService {
	private endpoint: string = "http://localhost:5000/tasks";
	constructor(private restTemplate: HttpClient) {}

	getTasks(): Observable<Task[]> {
		return this.restTemplate.get<Task[]>(this.endpoint);
	}

	addTask(task: Task): Observable<Task> {
		return this.restTemplate.post<Task>(this.endpoint, task, httpOptions);
	}

	deleteTask(task: Task): Observable<Task> {
		const url = `${this.endpoint}/${task.id}`;
		return this.restTemplate.delete<Task>(url);
	}

	patchTaskReminder(task: Task): Observable<Task> {
		const url = `${this.endpoint}/${task.id}`;
		return this.restTemplate.patch<Task>(
			url,
			{ reminder: !task.reminder },
			httpOptions,
		);
	}
}
