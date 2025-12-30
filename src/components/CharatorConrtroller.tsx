import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Character } from "./Character";
import { useRef } from "react";
import {Vector3} from "three";
import { useFrame } from "@react-three/fiber";;

type Props = {};

const CharatorConrtroller = (props: Props) => {

    const container = useRef<THREE.Group>(null);
    const camaraTarget = useRef<THREE.Group>(null);
    const camaraPosition = useRef<THREE.Group>(null);
    const charactor = useRef<THREE.Group>(null);

    const cameraWorldPosition =useRef(new Vector3())
    const cameraLookAtWordPosistion  =useRef(new Vector3())
    const cameraLookAt =useRef(new Vector3())

    // useFrame(({camera})=>{
    //     camaraPosition.current?.getWorldPosition(cameraWorldPosition.current);
    //     camera.position.lerp(cameraWorldPosition.current,0.1);

    //     if(camaraTarget.current){
    //         camaraTarget.current.getWorldPosition(cameraLookAtWordPosistion.current)
    //         cameraLookAt.current.lerp(cameraLookAtWordPosistion.current,0.1)
    //         camera.lookAt(cameraLookAt.current)
    //     }
    // })

  return (
    <RigidBody colliders={false} lockRotations>
      <group ref={container}>
        <group ref={camaraTarget} position-z={1.5}/>
        <group ref={camaraPosition} position-y={4} position-z={-4}/>
        <group ref={charactor}/>
        <Character scale={0.18} position-y={-0.25} animation={"idle"} />
      </group>
      {/* <CapsuleCollider args={[0.02, 0.15]} /> */}
    </RigidBody>
  );
};

export default CharatorConrtroller;
