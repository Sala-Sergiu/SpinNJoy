using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UpdateProductDto
    {
        public int Id { get; set; }
        
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string Type { get; set; }   

        [Required]
        public string Color { get; set; }

        [Required]
        [Range(100, Double.PositiveInfinity)]
        public long Price { get; set; }

        [Required]
        public decimal? Weight { get; set; }  

        [Required]
        [Range(0, 200)]
        public int Stock { get; set; } 

        public IFormFile File { get; set; }

        [Required]
        public string Description { get; set; }
    }
}