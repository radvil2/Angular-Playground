import { Routes } from "@angular/router";
import { LearnThreejsComponent } from "./learn-threejs.component";

export const LearnThreeJSRoutes: Routes = [
	{
		path: "mug-editor",
		title: "Mug Editor",
		component: LearnThreejsComponent,
	},
	{
		path: "",
		redirectTo: "mug-editor",
		pathMatch: "full"
	}
]
