import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ButtonComponent } from "./components/button/button.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { AboutComponent } from "./components/about/about.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AddTaskComponent } from "./components/add-task/add-task.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: "", component: TasksComponent },
	{ path: "about", component: AboutComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ButtonComponent,
		TasksComponent,
		TaskItemComponent,
		AddTaskComponent,
		AboutComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
