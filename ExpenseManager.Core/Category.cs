using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseManager.Core
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(512)]
        public string Description { get; set; }
    }
}
