using System.ComponentModel.DataAnnotations;

namespace ExpenseManger.Api.ViewModels
{
    public class CategoryViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "Length should not exceed 50 characters.")]
        public string Name { get; set; }

        [MaxLength(512, ErrorMessage = "Length should not exceed 512 characters.")]
        public string Description { get; set; }
    }
}