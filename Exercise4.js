function change()
{
    let redborder=document.getElementById('redborder').value;
    let greenborder=document.getElementById('greenborder').value;
    let blueborder=document.getElementById('blueborder').value;
    let borderwidth=document.getElementById("width").value;
    let redback=document.getElementById('redback').value;
    let greenback=document.getElementById('greenback').value;
    let blueback=document.getElementById('blueback').value;
    let p=document.getElementById("p");
    p.style.borderColor="rgb("+redborder+","+greenborder+","+blueborder+")";
    p.style.backgroundColor="rgb("+redback+","+greenback+","+blueback+")"
    p.style.borderWidth=borderwidth;
}