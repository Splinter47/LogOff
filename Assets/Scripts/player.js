#pragma strict

var inGame: boolean = true;
var anim: Animation;

function Start () {
	anim = transform.Find("ToonRabbitMesh").animation;
	anim.Play("walk4");

}

function Update () {

	rigidbody.AddForce (Vector3.right * rigidbody.mass);
	
	//check for horizontal then add force
	if (Input.GetAxis ("Horizontal") > 0) {
		rigidbody.AddForce (Vector3.right * (2+rigidbody.mass));
	} 
	else if (Input.GetAxis ("Horizontal") < 0) {
		rigidbody.AddForce (Vector3.left * (2-rigidbody.mass));
	} 
	
	//check for vertical then add force
	if (Input.GetAxis ("Vertical") > 0) {
		rigidbody.AddForce (Vector3.forward * 2);
	} 
	else if (Input.GetAxis ("Vertical") < 0) {
		rigidbody.AddForce (Vector3.back * 2);
	} 
	
	rigidbody.velocity = Vector3.ClampMagnitude(rigidbody.velocity, 5);

}

var icon : Texture2D;
var mySkin : GUISkin;

function OnGUI () {
	if (GUI.Button (Rect (Screen.width - 100,0,100,50), "Quit")) {
		Application.Quit();
	}
	
	// Assign the skin to be the one currently used.
	GUI.skin = mySkin;
	GUI.Box (Rect (5,5,100, 55), "Score");

	// Make a button. This will get the default "button" style from the skin assigned to mySkin.
	//GUI.Button (Rect (10,10,150,20), "Skinned Button");
	var score: String;
	if(inGame){
		score = "" + Time.time;
	}else{
		score = "GAME OVER";
	}
	
	GUI.Label (Rect (10,20,250,40), score);
	
}

function OnTriggerEnter (other : Collider) {
		if(other.tag == "game"){
			inGame = true;
			print("in");
		}
}

function OnTriggerExit (other : Collider) {
		if(other.tag == "game"){
			inGame = false;
			print("out");
		}
}