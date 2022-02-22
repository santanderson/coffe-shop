    const img = [{
        src: 'assets/mocha-coffee.png',
        name: 'Mocha Coffee',
        link: '#'}, 
        {
        src: 'assets/cappuccino.png',
        name: 'Cappuccino',
        link: '#'}, 
        {
        src: 'assets/irish-coffee.png',
        name: 'Irish Coffee',
        link: '#'}, 
        {
        src: 'assets/express-coffee.png',
        name: 'Express',
        link: '#'}, ]
    
    let count = 0;
    
    function loop(){
        setInterval('next()', 4000);
    };
    
    function update(){
    
        if(count > 3){
            count = 0;
            document.getElementById('slider-image').src= img[count].src;
            document.getElementById('drink-name').innerHTML= img[count].name;
            document.getElementById('slider-link').href= img[count].link;
        }
        if(count < 0){
            count = 3;
            document.getElementById('slider-image').src= img[count].src;
            document.getElementById('drink-name').innerHTML= img[count].name;
            document.getElementById('slider-link').href= img[count].link;
        }
        if(count >=0 && count <= 3){
            document.getElementById('slider-image').src= img[count].src;
            document.getElementById('drink-name').innerHTML= img[count].name;
            document.getElementById('slider-link').href= img[count].link;
        }
    }
    
    function next(){
        count += 1;
        update();
    }
    
    function prev(){
        count -= 1;
        update();
    }