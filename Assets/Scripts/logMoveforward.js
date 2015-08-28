#pragma strict

var rand: int = 400;

function Start () {
	rigidbody.AddForce (Vector3.back * rand);
}

function Update () {

	rand = Random.Range(400,500);
}