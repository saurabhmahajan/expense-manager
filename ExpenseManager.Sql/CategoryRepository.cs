using ExpenseManager.Core;

namespace ExpenseManager.Sql
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(ExpenseManagerDbContext dbContext) : base(dbContext)
        {
        }
    }
}
