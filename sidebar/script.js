var accordian = document.getElementsByClassName('accordian')
for(let i =0;i<accordian.length;i++){
    accordian[i].addEventListener("click",(e)=>{
        var arrow = document.getElementById('arrow');
        var innerHtml = e.target.lastElementChild   
        arrow.style.transform = "190deg"
        
        var panel = e.target.nextElementSibling;
        console.log(panel);


        if(panel.style.display === "block"){
            panel.style.display = "none"
        }else{
            panel.style.display = "block"
        }
    })
}

