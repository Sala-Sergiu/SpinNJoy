namespace API.DTOs
{
    public class BasketItemDto
    {
        public int ProductId { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Type { get; set; }       
        public string Color { get; set; }
        public long Price { get; set; }
        public decimal? Weight { get; set; }        
        public int Stock { get; set; } 
        public string ImageUrl { get; set; }      
        public int Quantity { get; set; }
    }
}