function MenuItem(pn, cal, gl, lac) {
    this.productName = pn;
    this.kCal = cal;
    this.gluten = gl;
    this.lactose = lac;
    this.name = function() {
        return this.productName + ' ' + this.kCal;
    };
}
var burger1 = new MenuItem('jonas burger1','1000',true,true);
var burger2 = new MenuItem('jonas burger2','250',false,true);
var burger3 = new MenuItem('jonas burger3','500',false,false);

console.log( burger1.name() );
console.log( burger2.name() );
console.log( burger3.name() );
