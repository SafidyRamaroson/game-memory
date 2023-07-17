
window.onload= () =>{
//Initialize the values 

let tabRand=[]
let hideImgs=""
let divs=""
let listOfImgClicked=[]
let stockeImgVue=[]
let nbClick=0
let nbTouche=0
let premDivClick,deuxDivClick,premierElClique,deuxiemeElClique


//Creating one class of Images  
class img {
    constructor(sourceImg,classDiv){
        this.sourceImg= sourceImg;
        this.classDiv=classDiv;
    }

    get_url_image(){
        return this.sourceImg;
    }

    get_class_div(){
        return this.classDiv;
    }
}


//Creating an Img Content 
class conteneurImg{
    constructor(classConten){
        this.classConten=classConten;
    }

    get_class_conten(){
        return this.classConten;
    }
}



//Appear random Images 
function displayRandomImage(){  

    div.innerHTML=""
    numImg=[]
    tab=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    const len = tab.length

    for (let i = len-1; i >0 ; i--) {
        let j =Math.floor(Math.random() *i)
        let k =tab[i]

        tab[i]=tab[j]
        tab[j]=k
    }

   tabRand=tab
   displayRandomtab(tabRand)
   displayImg()
}

// TODO:Creating an element HTML for stocking Images
let div=document.createElement('div');
document.body.appendChild(div);

function displayRandomtab(tab1){

    div.classList.add('content')

    //INSERT Image into Div's Element  
    for (let i = 0; i < tab1.length; i++) {
      
            if (tab1[i]==0) {
                img1=new img("images/portrait-01.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img1.get_class_div()+"></div><img src="+img1.get_url_image()+"></div>"
            
            }else if(tab1[i]==1){ 
                img2=new img("images/portrait-02.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img2.get_class_div()+"></div><img src="+img2.get_url_image()+"></div>"
            }else if(tab1[i]==2){
                img3=new img("images/portrait-03.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img3.get_class_div()+"></div><img src="+img3.get_url_image()+"></div>"
            }else if(tab1[i]==3){ 

                img4=new img("images/portrait-04.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img4.get_class_div()+"></div><img src="+img4.get_url_image()+"></div>"
            }else if(tab1[i]==4){

                img5=new img("images/portrait-05.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img5.get_class_div()+"></div><img src="+img5.get_url_image()+"></div>"
            }else if(tab1[i]==5){ 

                img6=new img("images/portrait-06.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img6.get_class_div()+"></div><img src="+img6.get_url_image()+"></div>"
            }else if(tab1[i]==6){

                img7=new img("images/portrait-07.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img7.get_class_div()+"></div><img src="+img7.get_url_image()+"></div>"
            }else {
                img8=new img("images/portrait-08.jpg","cacheImg");
                classContenImg=new conteneurImg("ContenImg");
                div.innerHTML +="<div class="+classContenImg.get_class_conten()+"><div class="+img8.get_class_div()+"></div><img src="+img8.get_url_image()+"></div>"
            }

    }
       //Select all of Images And Contenair Of Image
       hideImgs=document.querySelectorAll('.cacheImg');
       divs=document.querySelectorAll(".ContenImg");
}

//Execute once the operation 
displayRandomImage();

function displayImg(){
    //Display Image when an user click on hideImg
    hideImgs.forEach(imgVisible =>{
        imgVisible.addEventListener("click", () =>{

            imgVisible.style.backgroundColor="#000"
            imgVisible.style.transform="rotateY(180deg)"
            imgVisible.style.opacity=0

        });

    })  
    
    
}

function getElementClicked(){
    divs.forEach(el =>{
            el.addEventListener('click', () =>{

                let boolTest =true
                testDiv(el,boolTest)
                if(nbClick % 2 ==0 && boolTest ){
                    //get each ID's Image (clicked)
                    //And stock it in array(ListeImgClique)
                    premDivClick=el
                    premierElClique=premDivClick.childNodes[1].src.substr(-6,2)
                    listOfImgClicked[0]=premierElClique
                    nbClick+=1
                }else if(nbClick %2 ==1 && boolTest){
                    
                    if (premDivClick.childNodes[1] !=el.childNodes[1]){
                     //get each ID's Image (clicked)
                     //And stock it in array(ListeImgClique)
                    deuxDivClick=el
                    deuxiemeElClique=deuxDivClick.childNodes[1].src.substr(-6,2)
                    listOfImgClicked[1]=deuxiemeElClique
                    nbClick+=1;
                     //call the function validationImg 
                    validationImg(listOfImgClicked[0],listOfImgClicked[1])
                }
            }
       });
       
    })
}

getElementClicked();

function testDiv(el1,boll){
    if(stockeImgVue.length > 0){
        stockeImgVue.forEach(element => {
                if(el1 == element){
                    boll= false
                }
        });
    }
}

//Stop animate when game finished
function hideAnimation(){
    const animateBar = document.querySelector('.animateBar')
    console.log(animateBar);
    for (let numberBar = 0; numberBar <6; numberBar++) {
      animateBar.children[numberBar].style.opacity=0
    }
}

function validationImg(premierImg,deuxiemeImg){
        let varBoll1 = true
        let varBoll2 = true
       testDiv(premDivClick,varBoll1)
       testDiv(deuxDivClick,varBoll2)
        if(varBoll1 == false){
            premDivClick.childNodes[0].style.display="none"

        }else if (varBoll2 == false){
            deuxDivClick.childNodes[0].style.display="none"
        }else if(premierImg === deuxiemeImg){
            nbTouche++
            stockeImgVue.push(premDivClick)
            setTimeout( () =>{
                premDivClick.childNodes[0].style.display="none"
                deuxDivClick.childNodes[0].style.display="none"
            },1000)
            //if the both Images are same 
            //call the function DisplayNumbersTouch 
          setTimeout(DisplayNumbersTouchC(nbTouche),1500);
        }else{
            //Hide the both Images
            setTimeout( () =>{
            premDivClick.childNodes[0].style.transform="rotateZ(-180deg)"
            deuxDivClick.childNodes[0].style.transform="rotateZ(180deg)"
            premDivClick.childNodes[0].style.opacity=1
            deuxDivClick.childNodes[0].style.opacity=1 
            premDivClick.childNodes[0].style.backgroundColor="#fff"
            deuxDivClick.childNodes[0].style.backgroundColor="#fff"
            },1000)
        }

}
            //Display the Numbers of touch clicked by user if he find all images 
function DisplayNumbersTouchC(nbToucheClick){

    if (nbToucheClick ==8){
        const resultat =document.querySelector('.resultat')
        const paraNbTouche =document.querySelector('.nbTouche')
        divs.forEach(ele =>{
            ele.style.visibility="hidden"
        })
        paraNbTouche.innerHTML="Vous avez touché "+nbClick+" touches"
        resultat.style.visibility="visible"
        nbClick=0
        hideAnimation();
    }
}

//display all of division where we store our images
function displayAgainImg(){
    divs.forEach(ele =>{
        ele.style.visibility="visible"
    })
}

function cacheImg(){
    hideImgs.forEach(cacheImg =>{
        cacheImg.style.visibility="visible"
    })
}

//hide the result if User Click on rejouer

function  hideResult(){
    const resultat =document.querySelector('.resultat');
    resultat.style.visibility="hidden";
}

    //get the button rejouer
   const rejouer =document.getElementById("rejouer");
   
   rejouer.addEventListener("click",hideResult);
   rejouer.addEventListener('click',displayAgainImg);
   rejouer.addEventListener('click',cacheImg);
   rejouer.addEventListener('click',displayRandomImage);
   rejouer.addEventListener('click',getElementClicked)
}



