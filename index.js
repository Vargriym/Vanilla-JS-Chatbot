const data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","How may I help you today?"],
        options: ["Movies","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select a category"],
        options:['Hollywood','Tv-Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["HawkEye 360 satellites to monitor illegal fishing in Pacific Islands","China’s Landspace set for second methalox rocket launch","Radio noise from satellite constellations could interfere with astronomers"],
        url : {
            more:"https://www.space.com/news",
            link:["https://spacenews.com/hawkeye-360-satellites-to-monitor-illegal-fishing-in-pacific-islands/","https://spacenews.com/chinas-landspace-set-for-second-methalox-rocket-launch/","https://spacenews.com/radio-noise-from-satellite-constellations-could-interfere-with-astronomers/"]
        }
    },
    shopping: {
        title:["Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.carrefouregypt.com/mafegy/en/c/NFEGY4000000",
            link:["#","#","#","#","#"]
        }
    },
    beauty: {
        title:["Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.carrefouregypt.com/mafegy/en/personal-care/n/c/clp_NFEGY2000000",
            link:["#","#","#","#"]
        }
    },
    mobiles: {
        title:["These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.carrefouregypt.com/mafegy/en/c/NFEGY1220200",
            link:["#","#","#","#"]
        }
    },
    men: {
        title:["These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.carrefouregypt.com/mafegy/en/c/NFEGY5030000",
            link:["#","#","#","#","#"]
        }
    },
    women: {
        title:["These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.carrefouregypt.com/mafegy/en/c/NFEGY5040000",
            link:["#","#","#","#"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/watch?v=BjC0KUxiMhc&ab_channel=thestrokesVEVO",
            link:["https://www.youtube.com/watch?v=FcdOLKx2XG8&pp=ygUgUGhvc3Bob3Jlc2NlbnQgLSAiU29uZyBmb3IgWnVsYSI%3D","https://www.youtube.com/watch?v=FcdOLKx2XG8&pp=ygUgUGhvc3Bob3Jlc2NlbnQgLSAiU29uZyBmb3IgWnVsYSI%3D","https://www.youtube.com/watch?v=FcdOLKx2XG8&pp=ygUgUGhvc3Bob3Jlc2NlbnQgLSAiU29uZyBmb3IgWnVsYSI%3D","https://www.youtube.com/watch?v=FcdOLKx2XG8&pp=ygUgUGhvc3Bob3Jlc2NlbnQgLSAiU29uZyBmb3IgWnVsYSI%3D","https://www.youtube.com/watch?v=FcdOLKx2XG8&pp=ygUgUGhvc3Bob3Jlc2NlbnQgLSAiU29uZyBmb3IgWnVsYSI%3D"]
        }
    },
    hollywood: {
        title: ["Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F",
            link:["#","#","#","#","#"]
        }
    },
    web: {
        title: ["Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root",
            link:["#","#","#","#","#"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.paramountplus.com/intl/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
const cbot= document.getElementById("chat-box");

const len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(let i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

let j=0;
function handleChat(){
    console.log(j);
    let elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(let i=0;i<options.length;i++){
        let opt= document.createElement("span");
        let inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    let str= this.innerText;
    let textArr= str.split(" ");
    let findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    let elm= document.createElement("p");
    elm.setAttribute("class","test");
    let sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    let tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    let elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(let i=0;i<options.length;i++){
        let opt= document.createElement("span");
        let inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    let opt= document.createElement("span");
    let inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    let elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}