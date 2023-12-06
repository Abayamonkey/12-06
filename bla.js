function Change(){
    let color = document.getElementById('change').value;
    color =='stop' ? document.getElementById('container').style.background ='red':
    color =='slow' ? document.getElementById('container').style.background ='yellow':
     color =='go' ? document.getElementById('container').style.background ='green':
     document.getElementById('container').style.background = 'purple';
}