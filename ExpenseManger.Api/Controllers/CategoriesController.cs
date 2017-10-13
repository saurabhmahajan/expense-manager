using System;
using System.Collections.Generic;
using System.Linq;
using ExpenseManger.Api.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManger.Api.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        static List<Category> _categories = new List<Category>();

        public CategoriesController()
        {
            _categories = new List<Category>
            {
               new Category {Id = 1, Name = "Entertainment", Description = "Expenses made on movies, games etc."},
               new Category {Id = 2, Name = "Dining", Description = "Expenses made on food"},
               new Category {Id = 3, Name = "Cloths", Description = "Expenses made on cloths"},
               new Category {Id = 4, Name = "Telephone expenses", Description = "Expenses made on landline, mobile bill etc."},
               new Category {Id = 5, Name = "Fuel", Description = "Expenses made on fule"}
            };
        }

        public IEnumerable<Category> Get()
        {
            return _categories;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Category category)
        {
            if (ModelState.IsValid)
            {
                int lastId = _categories.Max(c => c.Id);
                category.Id = lastId + 1;
                _categories.Add(category);
            }

            return Created("Get", category);
        }
    }
}
