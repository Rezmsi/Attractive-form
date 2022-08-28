let leftEye= document.querySelector('.left-eye')
let rightEye= document.querySelector('.right-eye')
let username= document.querySelector('#username')
let password= document.querySelector('#password')
let btn = document.querySelector('button')

// onblur handler
function blur(){
    leftEye.style.cssText=`  
    top: 43px;
    position: absolute;
    height: 40px;
    left: 34px;`

    rightEye.style.cssText=`
    right: 34px;
    position: absolute;
    height: 40px;
    top: 43px;
    `
}

username.addEventListener('focus', ()=>{

    leftEye.style.cssText=`  
    top: 55px;
    position: absolute;
    height: 40px;
    left: 23px;`

    rightEye.style.cssText=`
    right: 42px;
    position: absolute;
    height: 40px;
    top: 55px;
    `
} )

username.addEventListener('keydown', (key)=>{

    // get number of positions 
     let rightEyeRight= +rightEye.style.right.substring(rightEye.style.right.indexOf('p'),0)
     let leftEyeLeft= +leftEye.style.left.substring(leftEye.style.left.indexOf('p'),0)

    if(key.keyCode===8 && username.value.length>0){

        leftEye.style.cssText=`  
             top: 55px;
             position: absolute;
             height: 40px;
             left: ${leftEyeLeft-0.5}px;`

        rightEye.style.cssText=`
             right: ${rightEyeRight+0.5}px;
             position: absolute;
             height: 40px;
             top: 55px; `

    }else if(key.keyCode!=8 && username.value.length<20){

        leftEye.style.cssText=`  
             top: 55px;
             position: absolute;
             height: 40px;
             left: ${leftEyeLeft+0.5}px;`

        rightEye.style.cssText=`
             right: ${rightEyeRight-0.5}px;
             position: absolute;
             height: 40px;
             top: 55px; `
    }
    
} )

username.addEventListener('blur',blur)


password.addEventListener('focus', ()=>{

    leftEye.style.cssText=`  
    top: 35.5px;
    position: absolute;
    height: 40px;
    left: 44px;`

    rightEye.style.cssText=`
    right: 42px;
    position: absolute;
    height: 40px;
    top: 35px;
    `
} )

password.addEventListener('blur',blur)

btn.addEventListener('click', ()=>{
    username.value=''
    password.value=''
})