using ExpenseManager.Core;
using Microsoft.EntityFrameworkCore;

namespace ExpenseManager.Sql
{
    public class ExpenseManagerDbContext : DbContext
    {
        public ExpenseManagerDbContext(DbContextOptions<ExpenseManagerDbContext> options) : base(options)
        {
            
        }

        public DbSet<Category> Categories { get; set; }
    }
}
