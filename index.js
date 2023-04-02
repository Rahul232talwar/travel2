
function bookcar(){
    document.getElementById('carfrom').style.display = "inline-block";  
}

var car = document.getElementById('cdata');

car.addEventListener('submit', function(event1){
    event1.preventDefault()

    var cname = document.getElementById('name').value
    console.log(cname);

    var from = document.getElementById('from').value
    console.log(from);

    var to = document.getElementById('to').value
    console.log(to);

    var distance = document.getElementById('distance').value
    console.log(distance);

    document.getElementById('carfrom').style.display = "none"; 
    alert(`Dear ${cname}, You have successfully booked the car to travel from ${from} to ${to}..............Happy Journey`)
})

    




function bookbus(){
    document.getElementById('busfrom').style.display = "inline-block";  
}
    
var bus = document.getElementById('bdata');
    
bus.addEventListener('submit', function(event2){
    event2.preventDefault()
    
    var bname = document.getElementById('name').value
    console.log(bname);
    
    var from = document.getElementById('from').value
    console.log(from);
    
    var to = document.getElementById('to').value
    console.log(to);
    
    var distance = document.getElementById('distance').value
    console.log(distance);
    
    document.getElementById('busfrom').style.display = "none"; 
    alert(`Dear ${bname}, You have successfully booked the bus to travel from ${from} to ${to}..............Happy Journey`)
    
})



function bookairplane(){
    document.getElementById('airplanefrom').style.display = "inline-block";  
}
    
var airplane = document.getElementById('adata');
    
airplane.addEventListener('submit', function(event3){
    event3.preventDefault()
    
    var aname = document.getElementById('name').value
    console.log(aname);
    
    var from = document.getElementById('from').value
    console.log(from);
    
    var to = document.getElementById('to').value
    console.log(to);
    
    var distance = document.getElementById('distance').value
    console.log(distance);
    
    document.getElementById('airplanefrom').style.display = "none"; 
    alert(`Dear ${aname}, You have successfully booked the Airplane to travel from ${from} to ${to}..............Happy Journey`) 
}
)



function feedback() {
    document.getElementById('feedbackform').style.display = "inline-block";
}

