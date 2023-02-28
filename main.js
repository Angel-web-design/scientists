const start_elements = document.querySelector('.st')
const load_elements = document.querySelectorAll('.load')
const meeting_elements = document.querySelectorAll('.meeting')


const main = document.querySelector('main')
const aside = document.querySelector('aside')
const first_aside = document.querySelector('.first-aside')
const second_aside = document.querySelector('#sec-aside')



const lavoisier = document.querySelector('.lavoisier')
const galvani = document.querySelector('.galvani')

const blank = document.querySelector('#blank')

let i = 0;
let x = 0;



document.querySelector('form').addEventListener('submit', e => {
  if(e == undefined){e = window.event}

  e.preventDefault();

  blank.play()

  const data = Object.fromEntries( new FormData(e.target) )
  const username = data.username

  start_meeting(username)
  
  load()
  const interval = setTimeout(() => {
    hide()
    load()
    reveal_elements()
  }, 2000);

})



function hide(){ start_elements.classList.toggle('off') }

function load(){
  load_elements.forEach(element => {
    element.classList.toggle('off')
  })
}

function reveal_elements(){
  meeting_elements.forEach(element => {
    element.classList.toggle('off')
  })
}

function start_meeting(username){
  const name = document.querySelector('#username')
  name.textContent = username
}

const finish_btn = document.querySelector('#finish')
finish_btn.addEventListener('click', ()=>{
  load()
  const interval = setTimeout(() => {
    hide();
    load();
    reveal_elements();
  }, 2000);
})





document.addEventListener('keydown', (e)=>{
  if(e == undefined){e = window.event};
  const key = e.which;

  if(key == 39){
    audio_fn()
  }
  else if(key == 37){
    reverse_audio_fn()
  }
  else if(key == 32){
    pause_audio_fn()
  }
  else if(key == 13){
    continue_audio_fn()
  }
  else if(key == 80){
    questions()
  }
});

function questions(){
  x ++;
  const question = document.querySelector(`#question${x}`);
  if(question == null){return console.log('null')}
  question.play()

  characters(question)
}


function audio_fn(){
  i ++;
  console.log(i)

  if(i == 9){ return image(1) }
  else if(i == 10){ image(1) } // Hide image

  else if(i == 11){ return image(2) }
  else if(i == 12){ image(2) } // Hide image

  else if(i == 19){ return image(3) }
  else if(i == 20){ image(3) } // Hide image

  else if(i == 24){ return image(4) }
  else if(i == 25){ image(4) }

  const audio = document.querySelector(`#audio${i}`)
  if(audio == null){return console.log(`there's no audio`)}
  audio.play()

  characters(audio)   
}


function image(index){
  const experiment = document.querySelector(`.img-${index}`)
  experiment.classList.toggle('image')
  experiment.classList.toggle('off')

  main.classList.toggle('image')

  first_aside.classList.toggle('off')
  second_aside.classList.toggle('second-aside')
}



function reverse_audio_fn(){
  if(i == 0){ return console.log('This is the first audio') }
  i --;
  const audio = document.querySelector(`#audio${i}`);
  if(audio == null){return console.log(`there's no audio`)}
  audio.play();

  characters(audio)
}



function pause_audio_fn(){
  const audio = document.querySelector(`#audio${i}`);
  if(audio == null){return console.log('Now arent active audios')}
  audio.pause()
}


function continue_audio_fn(){
  const audio = document.querySelector(`#audio${i}`);
  if(audio == null){return console.log(`there's no audio`)}
  audio.play();
}



function characters(a){
  attr = a.getAttribute("char")
  console.log(attr)

  if(attr == 'lavoisier'){
    if(!(lavoisier.classList.contains('current'))){lavoisier.classList.toggle('current');}
    if(galvani.classList.contains('current')){galvani.classList.toggle('current');}
  }
  else if(attr == 'galvani'){
    if(!(galvani.classList.contains('current'))){galvani.classList.toggle('current');}
    if(lavoisier.classList.contains('current')){lavoisier.classList.toggle('current');}
  }
}



//hide(); reveal_elements()