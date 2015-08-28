#pragma strict

public var logForward : Transform;
public var logBack : Transform;

var timeDelay = 1;
var rand: int = 0;

function Start () {
	while (true) {
        yield WaitForSeconds(timeDelay);
        
		var log1: Transform;
		log1 = Instantiate (logForward, Vector3(0, 0.3, 7), Quaternion.identity);
		log1.transform.Rotate(Vector2.up * rand);
		
		//var log2: Transform;
		//log2 = Instantiate (logBack, Vector3(0, 0.3, -7), Quaternion.identity);
		//log2.transform.Rotate(Vector2.up * (rand + 90));
		
	}

}

function Update () {

	rand = Random.Range(0,360);
}