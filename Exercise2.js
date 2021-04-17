var pic=0;
var image=["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
function previous()
{
    if (pic==0){
        pic=4;
    }
    else{
        pic--;
    }
    document.getElementById("picture").src=image[pic]
    
}
function next()
{
    if (pic==4){
        pic=0;
    }
    else{
        pic++;
    }
    document.getElementById("picture").src=image[pic]
}