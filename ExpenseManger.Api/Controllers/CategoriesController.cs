using System.Collections.Generic;
using System.Linq;
using ExpenseManager.Core;
using ExpenseManger.Api.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManger.Api.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoriesController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public CategoryListViewModel Get()
        {
            List<Category> categories = _categoryRepository.GetAll().ToList();
            return new CategoryListViewModel(categories);
        }

        [HttpPost]
        public IActionResult Post([FromBody]CategoryViewModel categoryViewModel)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestObjectResult(ModelState);
            }

            Category category = MapToCategory(categoryViewModel);
            _categoryRepository.Create(category);
            return Created("Get", categoryViewModel);
        }

        private Category MapToCategory(CategoryViewModel categoryViewModel)
        {
            return new Category
            {
                Name = categoryViewModel.Name,
                Description = categoryViewModel.Description
            };
        }
    }
}
