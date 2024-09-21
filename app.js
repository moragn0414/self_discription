'use strict';

const switcher = document.querySelector(".btn");
const switcher2 = document.querySelector(".btn2");

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className=document.body.className;
    if(className=="light-theme"){
        this.textContent="反覆點按獲得最佳效果";
    }else{
        this.textContent="癲癇發作按鈕";
    }

    console.log('current class name: '+ className);
});

switcher2.addEventListener('click', function(){
    
    document.body.classList.toggle('white-word');
    document.body.classList.toggle('black-word');
    
    
});
