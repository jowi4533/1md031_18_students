'use strict';
var socket = io();
var message = "hej";
var personal_info_array = [];
var selected_burger_list = [];
var order_info= false;
var burger_select= false;
var gender = ""; //denna rad
var meny = function(nm,st,kc,la,gl){
  this.name = nm;
  this.stock = st;
  this.Kcal = kc;
  this.lactose = la;
  this.gluten =gl


}
var checkGender = function(){
 var gender_radios = document.getElementsByName("gender");
  for (var i = 0 , length = gender_radios.length; i < length; i++){
    if(gender_radios[i].checked){
      return gender_radios[i].value;
      break;
    }

}
}
var checkPayment = function(){
  let index = document.getElementById("payment").selectedIndex;
  var payment_list = document.getElementById("payment").options;
  return (payment_list[index])

}


var vm = new Vue({
  el: '#vue_container',

  data: {
    burgers: [
      {name: "Jonas Burger1", stock:10, Kcal:500,lactose:false, gluten:false, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"},
      {name: "Jonas Burger2", stock:10, Kcal:600,lactose:true, gluten:false, img:"https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"},
      {name: "Jonas Burger3", stock:10, Kcal:700,lactose:false, gluten:true, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"},
      {name: "Jonas Burger4", stock:10, Kcal:800,lactose:true, gluten:true, img:"https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"},
      {name: "Jonas Burger5", stock:10, Kcal:900,lactose:false, gluten:false, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"}

    ],
    message: message,
    personal_info_array: personal_info_array,
    order_info: order_info,
    selected_burger_list: selected_burger_list,
    burger_select: burger_select,
    order_list: [],
    payment: [],
    gender: gender,  //denna rad
    orders: {}


  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {

    orderDone: function() {
      console.log("button clicked");
      var Name = document.getElementById("Full_name").value;
      var Email = document.getElementById("Email").value;
      //var Street= document.getElementById("Street_name").value;
      //var Housenumber = document.getElementById("House_number").value;
      var Radios = document.getElementsByName("gender");
      this.personal_info_array = [Name,Email];
      this.message= selected_burger_list
      this.order_info = true
      this.payment = checkPayment();
      //this.gender = "test" ;  //denna rad
      //this.gender = gender_check();
      this.gender = checkGender();
      console.log(document.getElementById("payment").selectedIndex);


    },
    test: function(){
      console.log("test");
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      console.log("tja");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    },
      displayOrder: function (event) {
      console.log("tja");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
                    //this.orders.details = { x: event.clientX - 10 - offset.x,
                      //         y: event.clientY - 10 - offset.y };
                    //this.orders.orderId = "T" ;
                    //this.orders.orderItems = [];
                    //this.orders.key = "T";
                    //this.orders.order = [];
                    this.orders = {orderId: "T",details: { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y },orderItems:[]};

    }
  }
})
