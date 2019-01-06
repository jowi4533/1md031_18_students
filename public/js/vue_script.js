'use strict';
var socket = io();
var message = "hej";
var personal_info_array = [];
var selected_burger_list = [];
var order_info= false;
var burger_select= false;
var gender = ""; //denna rad
var order_number = 0;

var meny = function(nm,st,kc,la,gl){
  this.name = nm;
  this.stock = st;
  this.Kcal = kc;
  this.lactose = la;
  this.gluten = gl;
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
var getNext = function(){
  order_number = order_number +1;
  return order_number;

}

var vm = new Vue({
  el: '#vue_container',

  data: {

    burgers: [
      {name: "Jonas Burger1", stock:10, Kcal:500,lactose:false, gluten:false, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"},
      {name: "Jonas Burger2", stock:10, Kcal:600,lactose:true, gluten:false, img:"https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"},
      {name: "Jonas Burger3", stock:10, Kcal:700,lactose:false, gluten:true, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"},
      {name: "Jonas Burger4", stock:10, Kcal:800,lactose:true, gluten:true, img:"https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"},
      {name: "Jonas Burger5", stock:10, Kcal:900,lactose:false, gluten:false, img:"https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"}],

    message: message,
    personal_info_array: personal_info_array,
    order_info: order_info,
    selected_burger_list: selected_burger_list,
    burger_select: burger_select,
    order_list: [],
    payment: [],
    gender: gender,
    orders: {},
    newOrder: {},
    order_position_array: []


  },

  methods: {

    orderDone: function() {
      console.log("button clicked");
      this.name = document.getElementById("Full_name").value;
      this.email = document.getElementById("Email").value;
      this.personal_info_array = [this.name,this.email];
      this.message= selected_burger_list;
      this.order_info = true;
      //this.payment = checkPayment();
      this.gender = checkGender();
      console.log(document.getElementById("payment").selectedIndex);
      this.addOrder();
      //this.sendCostumerInfo();
      //var Street= document.getElementById("Street_name").value;
      //var Housenumber = document.getElementById("House_number").value;
      //this.gender = "test" ;  //denna rad
      //this.gender = gender_check();
      this.personal_info_array = [this.name,this.email,this.payment,this.gender];
      this.sendCostumerInfo();

    },
    test: function(){
      console.log("test");
    },

    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};

        this.newOrder = {position: { x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y },Tdisplay : "T"};

        },
        addOrder : function () {
          socket.emit("addOrder", { orderId: getNext(),
            details:  this.newOrder.position, //ändra
            orderItems: this.order_list,
            infoList: this.personal_info_array}
          )
        },

        sendCostumerInfo : function () {
          socket.emit("addOrder",this.personal_info_array)

        }
      }
    })
