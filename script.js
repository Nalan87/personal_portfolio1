
let portfolio_btn = document.querySelector("#portfolio")

portfolio_btn.addEventListener("click", () => {
    let portfolio_section = document.querySelector("#portfolio-div");
    console.log(portfolio_section);
    portfolio_section.scrollIntoView()
});



let allAnchorTag = document.querySelectorAll("a")

allAnchorTag.forEach((val) => {

    console.log(val.classList.add("achor_underline"));
})


function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === ''  || email.value === '' || msg.value === ''){
       danger.style.display = 'block';
    }
    else{
       setTimeout(()=>{
           Name.value ='';
           email.value = '';
           msg.value = '';
       },2000);

       success.style.display = 'block';
    }

    setTimeout(()=>{
       danger.style.display ='none';
       success.style.display='none';
     },4000)

}