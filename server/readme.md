## Description
Nespresso Website Clone

## Init
```
1. clone project
2. load maven dependemcies
3. edit yml file(your database configs)
4. run main class
5. test API with Postman
```

## Stack
- React
- Typescript
- TailwindCSS
- Spring Boot
- Spring Security(JWT)
- JPA
- MySQL

## DB
```
User {
	userId: Long; <PK>
	firstName: String;
	lastName: String;
	email: String;
	password: String;
	address: String;

	@OneToOne
	cartId: Long; <FK> 
}

@PostConstruct
Item {
	itemId: Long;<PK>
	itemName: String;
	price: Int;
	description: String;
	itemImage: Array<String>;
	
	@OneToMany()
	cartItemId: Long; <FK>
	cartItem: CartItem;
}

Capsule extends Item {
	intensity: Int;
	cupSize: CupSize <enum>("ESPRESSO", "LUNGO")
	profile: String;
	note: String;
	origin: String;
}

Machine extends Item {
	machineType: MachineType <enum>("ORIGINAL", "VERTUO")
}

CartItem {
	cartItemId: Long; <PK>

	@ManyToOne
	itemId: Long; <FK>
	item: Item;

	@ManyToOne
	cartId: Long; <FK>
	cart: Cart;

	amoumt: Int;
}

Cart {
	cardId: Long; <PK>

	@OneToOne
	userId: Long; <FK>
	Item: Array<CartItem>;

	@OneToOne
	orderId: Long <FK>
	order: Order;

	@OneToMany
	cartItemId: Long; <FK>
	cartItem: CartItem;

	@After
	totalPrice: Int;
}

Order {
	orderId: Long; <PK>
	orderDate: String; (@JsonFormat)

	@OneToOne
	cartId: Long <FK>
	cart: Cart;
}
```

## API
```
- User
1. login
@Post("/user/login")
input {
	email,
	password
}
output {
	httpStatus,
	message,
	token
}

2. signup
@Post("/user/signup")
input {
	email,
	firstName,
	lastName,
	password,
	confirmPassword,
	address
}
output {
	httpStatus,
	message
}

3. me
@Post("/user/me")
input {
	header: token
}
output {
	httpStatus,
	message,
	UserInfo(userId, email, firstName, lastName, address)
}

4. update userinfo
@Put("/user/{userId}/update-info")
input{
	header: token
	firstName,
	lastName,
	email,
	confirmEmail,
}
output{
	httpStatus,
	message
}

5. update address
@Put("/user/{userId}/update-address")
input {
	header: token
	address
}
output{
	httpStatus,
	message
}

- Item

@Get("/item/capsule")
GetCapsuleItem
input{
}
output{
	httpStatus,
	message,
	List<Capsule>
}

@Get("/item/machine")
GetMachineItem
input{
}
output{
	httpStatus,
	message,
	List<Machine>
}

- Cart

@Get("/cart/{userId}")
GetCartByUserId
input{
	header: token
}
output{
	httpStatus,
	message,
	List<CartItem>
}

@Post("/cart")
SaveItem
input{
	userId,
	ItemId
}
output{
	httpStatus,
	message,
	List<CartItem>
}

@Put("/cart/{cartId}")
UpdateCartAmount(input: cartItemId, amount)
input{
	List<CartItem>
}
output{
	httpStatus,
	message
}


- Order

GetAllOrders
@Get("/order/{userId}")
input{
    token: header
}
```



