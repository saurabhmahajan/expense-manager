using System.Collections.Generic;
using System.Linq;
using ExpenseManager.Core;

namespace ExpenseManger.Api.ViewModels
{
    public class CategoryListViewModel
    {
        public IEnumerable<CategoryViewModel> Categories;

        public CategoryListViewModel(List<Category> categories)
        {
            Categories = categories.Select(c => new CategoryViewModel
            {
                Id = c.Id,
                Name = c.Name,
                Description = c.Description
            });
        }
    }
}