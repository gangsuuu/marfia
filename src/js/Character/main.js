import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import GUI from 'lil-gui';
import { gsap } from 'gsap';
import CharacterInfo from './characterInfo.js';
  
/** const */

  const characterInfo = new CharacterInfo()

  const section = document.querySelector('.character-container')
  const backBtn = document.querySelector('.character-nav-back')

  const job = document.querySelector('.character-job')
  const skill = document.querySelector('.character-skillDetail')
  const quote = document.querySelector('.character-quote')
  const scripts = document.querySelector('.character-scripts')
  const navIcons = document.querySelectorAll('.character-nav-li')


  const raycaster = new THREE.Raycaster()
  const loader = new THREE.ImageLoader();
  const textureLoader = new THREE.TextureLoader();
  const cardImgs =['/public/assets/images/card/characterCard.png',
  '/public/assets/images/card/characterCard_01.png',
  '/public/assets/images/card/characterCard_06.png',
  '/public/assets/images/card/characterCard_07.png',
  '/public/assets/images/card/characterCard_08.png',
  '/public/assets/images/card/characterCard_09.png',
  '/public/assets/images/card/characterCard_10.png',
  '/public/assets/images/card/characterCard_11.png',
  '/public/assets/images/card/characterCard_12.png',
  '/public/assets/images/card/characterCard_13.png',
  '/public/assets/images/card/characterCard_15.png',
  '/public/assets/images/card/characterCard_17.png',
  '/public/assets/images/card/characterCard_18.png',
  '/public/assets/images/card/characterCard_19.png',
  ]
  const cards = []

  const jobs = ['mafia','doctor','reporter','shaman','christian','conman','citizen','detective','hidden']
  const currentMouse = {x:0,y:0}
  const prevMouse = {x:0,y:0}



  //loading event
  let count = 0;
  cardImgs.forEach((img,index) => {
    loader.load(
      img,
      function ( image) {
        count++;
        if(cardImgs.length == count){
          enterAnimation()
        }
      },
      undefined,
      function(){
        console.error('erreor')
      }
    )//loader
  })//cardImgs.forEach end




  //** let */
  let currentIntersect = null
  let showDitails = false
  let selectedCard

  //** param */


  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  renderer.autoClear = false;

  const container = document.querySelector('#container');
  container.appendChild(renderer.domElement);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

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

  
  /** create */
  const create = () => {
    const geometry = new THREE.PlaneGeometry(2,2)  ;
    const material  = new THREE.MeshBasicMaterial({
      color: '#7FAED0'
    })
    const mesh = new THREE.Mesh(
      geometry,
      material
    )
    // scene.add(mesh)
  };

const createCard  = (i) => {
  const geometry = new THREE.PlaneGeometry(1.4,2.2)  ;
  const besideMaterial  = new THREE.MeshBasicMaterial({
    // color: '#7FAED0',
    map:textureLoader.load(cardImgs[0]),
    transparent: true,
    opacity:0,
  })
  const frontSideMaterial = new THREE.MeshBasicMaterial({
    map:textureLoader.load(cardImgs[i+1]),
    transparent: true,
  })


  const beside = new THREE.Mesh(
    geometry,
    besideMaterial
  )
  const frontSide = new THREE.Mesh(
    geometry,
    frontSideMaterial
  )
 let a = 2
  let card = {
    x : i*a,
    card : frontSide,
  }
  frontSide.name = jobs[i]
  cards.push(card);
  // frontSide.scale.set(0.2,0.2,0.2);
  frontSide.position.x = i*a
  beside.rotation.y = degToRad(180)
  scene.add(beside,frontSide);
}


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
  };


  const enterAnimation = () => {
    for(let i = 0; i < cardImgs.length - 1; i++) {
      createCard(i);
    }
  }

  const showCharacter = (info) => {
    job.innerHTML = info.job
    skill.innerHTML = info.job
    quote.innerHTML = info.job
    scripts.innerHTML = info.job
    selectedCard =  info.work
  }

   /**
   *  getMousePoint - get mouse x,y points
  */
   const getMousePoint = (e,state) => {
    if(state === 'start') {
      prevMouse.x = 0     
      prevMouse.y = 0
      currentMouse.x = e.touches[0].clientX / canvasSize.width * 2 - 1
      currentMouse.y = - (e.touches[0].clientY / canvasSize.height) * 2 + 1
    } else if(state === 'end') {
      prevMouse.x = currentMouse.x
      prevMouse.y = currentMouse.y
      currentMouse.x = e.changedTouches[0].clientX / canvasSize.width * 2 - 1
      currentMouse.y = - (e.changedTouches[0].clientY / canvasSize.height) * 2 + 1
    }
  }// getMousePoint end



  /** render */
  const draw = ( ) => {
    renderer.render(scene, camera);
    raycaster.setFromCamera( currentMouse, camera );

    requestAnimationFrame(() => {
      draw();
    });
  };

  /** init */
  const initialize = () => {
    create();
    addEvent();
    resize();
    draw();
  };

  initialize();




document.addEventListener('DOMContentLoaded', ()=>{
  /**
   * touchstart evnet
   * 타겟 설정
   * 
   */
  
  
  window.addEventListener("touchstart",function(e){
    getMousePoint(e,'start')

  })//touch start

  /**
   * touchend event
   */
  window.addEventListener("touchend",function(e){
    getMousePoint(e,'end')

    const intersects = raycaster.intersectObjects( scene.children );
        if(showDitails) return 

        let x = currentMouse.x - prevMouse.x
        if(x > 0.4){
          cards.forEach(card =>{
            card.x += 2
            gsap.to(card.card.position,{
              x: card.x,
              duration:1,
            })
          })
          
        }
        else if(x < -0.4){
          cards.forEach(card =>{
            card.x -= 2
            gsap.to(card.card.position,{
              x: card.x,
              duration:1,
            })
          })
        } 
        else if ( x <= 0.4 && x >= -0.4){
          if(!intersects[0]) return
          showDitails = true
          let job = intersects[0].object.name
          console.log(job)
          let character = characterInfo.selectCharacter(job)
          currentIntersect = intersects[0]

        
          cards.forEach((card) => {
            gsap.to(card.card.material, {
              opacity: 0,
              duration:0.3
            })
          })

          section.style.display = 'block'
          gsap.to(section,{
            opacity:1,
            duration:0.5
          })

          showCharacter(character)
        }
  })// touch end

  /**
   * touchmove event
   */
  window.addEventListener("touchmove",function(e){

  })// touch move
 backBtn.addEventListener("click",function(e){
    cards.forEach((card) => {
      gsap.to(card.card.material, {
        opacity: 1,
        duration:0.3
      })
    })
    gsap.to(section,{
      opacity:0,
      duration:0.5
    })
    let number = jobs.indexOf(selectedCard)
    cards.forEach((card,index) => {
      card.card.position.x = index*2 - number * 2
      card.x = index*2 - number * 2

    })
    
    
    showDitails = false
  })// click end


  navIcons.forEach((icon) => {
    icon.addEventListener('click',function(e){
      e.preventDefault();
      let character = characterInfo.selectCharacter(e.target.children[0].dataset.job)
      showCharacter(character)
      
    })
  })

  
})//loaded
