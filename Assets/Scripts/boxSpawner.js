#pragma strict

public var boxPrefab : Transform;

var timeDelay = 2;
var randRot: float = 0;
var randAim: float = 0;
var boxSpawn: float = -5;

function Start () {

	while (true) {
        yield WaitForSeconds(timeDelay);
        
        var box1: Transform;
        box1 = Instantiate (boxPrefab, Vector3(10.5, 3.2, boxSpawn), Quaternion.identity);
		box1.transform.Rotate(Vector3.up * randRot);
		box1.rigidbody.AddForce (Vector3(0,0,1) * randAim * box1.rigidbody.mass);
    }
}


function Update () {
	randAim = Random.Range(-20,20);
	randRot = Random.Range(0,360);
	boxSpawn = Random.Range(-4.8,-11);

}