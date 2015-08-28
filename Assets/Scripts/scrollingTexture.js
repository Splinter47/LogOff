#pragma strict


public var materialIndex: int = 0;
public var uvAnimationRate: Vector2 = Vector2( 1.0f, 0.0f );
public var textureName: String = "_MainTex";
 
var uvOffset: Vector2 = Vector2.zero;
 
function LateUpdate() {
        uvOffset += ( uvAnimationRate * Time.deltaTime );
        if( renderer.enabled )
        {
            renderer.materials[ materialIndex ].SetTextureOffset( textureName, uvOffset );
        }
}