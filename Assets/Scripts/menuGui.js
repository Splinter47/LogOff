﻿#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	// Make a background box
	GUI.Box (Rect (10,10,100,90), "Loader Menu");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,40,80,20), "Play")) {
		Application.LoadLevel("scene1");
	}

	// Make the second button.
	if (GUI.Button (Rect (20,70,80,20), "Quit")) {
		Application.Quit();
	}
}