var food = [
  {
  "name": "jonas burger1",
  "kCal": 500,
  "lactose": false,
  "gluten": false,
  "img": "https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"
  },
  {
  "name": "jonas burger2",
  "kCal": 600,
  "lactose": false,
  "gluten": true,
  "img": "https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"
},
{
  "name": "jonas burger3",
  "kCal": 700,
  "lactose": true,
  "gluten": true,
  "img": "https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"
},
{
  "name": "jonas burger4",
  "kCal": 800,
  "lactose": false,
  "gluten": false,
  "img": "https://res.cloudinary.com/teepublic/image/private/s--QGmjn0Qd--/t_Preview/b_rgb:fefeff,c_limit,f_jpg,h_630,q_90,w_630/v1501533190/production/designs/1779865_1.jpg"
},
{
  "name": "jonas burger5",
  "kCal": 900,
  "lactose": false,
  "gluten": false,
  "img": "https://i.pinimg.com/originals/ef/08/65/ef0865a83a47e946e086a9e97ead23df.jpg"
}
<span>Add order</span><input type="checkbox"name={{burger.name}} value="burger.name" v-on:click="burger_select_done(value)">
]
