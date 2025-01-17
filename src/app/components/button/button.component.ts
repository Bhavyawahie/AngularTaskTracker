import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
	@Input()
	text: string = "Click";
	@Input()
	color: string = "red";

	@Output()
	btnClick: any = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}
	
	onClick(): void {
		this.btnClick.emit();
	}
}
