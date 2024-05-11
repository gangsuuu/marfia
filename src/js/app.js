import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { gsap } from 'gsap';
import Intro from './Intro';


export default function () {
/** const */

  /** 변수 */

  //** const */
  const intro = new Intro(gsap);

const introImg = document.querySelector('.intro-imageWrapper img')
const introopeningWrapper = document.querySelector('.intro-openingWrapper')
const introSection = document.querySelector('.intro-section')

introImg.addEventListener('animationend',(e)=> {
  introopeningWrapper.remove();
  gsap.to(introSection,{
    opacity: 1,
    duration:0.4,
  })
  
})

  //** let */
  
  //** param */



  /** test */
  // intro.opening()
  
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  // renderer.outputEncoding = new THREE.sRGBEncoding;
  renderer.autoClear = false;

  const container = document.querySelector('#container');
  container.appendChild(renderer.domElement);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // 
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );

  /** layerModel */

  /** library */

  /** Camera */
  camera.position.set(0, 0, 3);

  /** Controls */
  const orbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enabled = false;  // controls off
    return controls;
  }
  
  /** create */
  const create = () => {
    const geometry = new THREE.PlaneGeometry(3,3)  ;
    const material  = new THREE.MeshBasicMaterial({
      color: '#7FAED0'
    })
    const mesh = new THREE.Mesh(
      geometry,
      material
    )
    // scene.add(mesh);  
  };

  /** resize */
  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };


  /** addEvent */
  const addEvent = () => {
    window.addEventListener('resize', resize);
    intro.enter();


  };

  /** render */
  const draw = ( orbitControl) => {
    orbitControl.update();
    renderer.render(scene, camera);

    requestAnimationFrame(() => {
      draw(orbitControl);
    });
  };

  /** init */
  const initialize = () => {
    create();
    const orbitControl = orbitControls()
    addEvent();
    resize();
    draw(orbitControl);
  };
  initialize();
}