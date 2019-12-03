
const progressbar=document.getElementsByClassName('progress-bar')[0];
setInterval(()=>
{
 const computedstyle=getComputedStyle(progressbar);
 const width=parseFloat(computedstyle.getPropertyValue('--width')||0);
 progressbar.style.setProperty('--width',width+.1);
},5);