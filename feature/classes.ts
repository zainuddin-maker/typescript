var color

class Vehicle {
   constructor(public color: string) {}

   protected honk() :void {
        console.log("beep")
    }
}

const Vehicles = new Vehicle("color")
console.log(Vehicles.color)


class Cars extends Vehicle {

    constructor( public wheels:number , color : string ){
        super(color)
    }

    drive():void {
        console.log("drive")
    }

    startDriving():void {
        this.drive()
        this.honk()
    }

}

const carnew = new Cars(4,"red")
carnew.startDriving()