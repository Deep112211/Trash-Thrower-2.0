class Paper{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            dencity:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paperimage.png");

        this.radius = radius;

        this.x = x;
        this.y = y;
        
        World.add(world, this.body);

        
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
}