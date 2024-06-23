using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    public static class BasketExtensions
    {
        public static BasketDto MapBasketToDto(this Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Model = item.Product.Model,
                    Price = item.Product.Price,
                    Stock = item.Product.Stock,
                    Color = item.Product.Color,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    Weight = item.Product.Weight,
                    ImageUrl = item.Product.ImageUrl,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}