using API.Data;
using API.DTOs;
using API.Entities.OrderAggregate;
using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class OrdersController : BaseApiController
    {
        private readonly StoreContext _context;
        public OrdersController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderDto>>> GetOrders()
        {
            return await _context.Orders
                .ProjectOrderToOrderDto()
                .Where( x=> x.BuyerId == User.Identity.Name)
                .ToListAsync();
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<OrderDto>> GetOrder(int id)
        {
            return await _context.Orders
                .ProjectOrderToOrderDto()
                .Where( x=> x.BuyerId == User.Identity.Name && x.Id == id)
                .FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateOrder(CreateOrderDto orderDto)
        {
            var basket = await _context.Baskets
                .RetrieveBasketWithItems(User.Identity.Name)
                .FirstOrDefaultAsync(); 

            if (basket == null) return BadRequest(new ProblemDetails{Title = "Could not locate basket"});

            var items = new List<OrderItem>();

            foreach (var item in basket.Items)
            {
                var productItem = await _context.Products
                    .FindAsync(item.ProductId);

                var itemOrdered = new ProductItemOrdered
                {
                    ProductId = productItem.Id,
                    Brand = productItem.Brand,
                    PictureUrl = productItem.ImageUrl
                };
                var OrderItem = new OrderItem
                {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity
                };
                items.Add(OrderItem);
                productItem.Stock -= item.Quantity;
                
            }

            var subTotal = items.Sum(item => item.Price * item.Quantity);
            var deliveryFee = subTotal > 250000 ? 0 : 5000;

            var order = new Order
            {
                OrderItems = items,
                BuyerId = User.Identity.Name,
                ShippingAddress = orderDto.ShippingAddress,
                Subtotal = subTotal,
                DeliveryFee = deliveryFee,
                PaymentIntentId = basket.PaymentIntentId
            };

            _context.Orders.Add(order);
            _context.Baskets.Remove(basket);

            if(orderDto.SaveAddress)
            {
                var user = await _context.Users
                    .Include(a => a.Address)
                    .FirstOrDefaultAsync(x => x.UserName == User.Identity.Name);
                var address = new UserAddress
                {
                    FullName = orderDto.ShippingAddress.FullName,
                    Address1 = orderDto.ShippingAddress.Address1,
                    City = orderDto.ShippingAddress.City,
                    State = orderDto.ShippingAddress.State,
                    Zip = orderDto.ShippingAddress.Zip,
                    Country = orderDto.ShippingAddress.Country,
                    
                };
                user.Address = address;
            }

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return CreatedAtRoute("GetOrder", new {id = order.Id}, order.Id);
            return BadRequest("Problem creating order");
        } 
    }
}