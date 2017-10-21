using System.Collections.Generic;
using System.Linq;
using ExpenseManager.Core;

namespace ExpenseManager.Sql
{
    public class DbSeeder
    {
        public static void Seed(ExpenseManagerDbContext dbContext)
        {
            dbContext.Database.EnsureCreated();

            if (!dbContext.Categories.Any())
            {
                List<Category> categories = new List<Category>
                {
                    new Category {Name = "Entertainment", Description = "Expenses made on movies, games etc."},
                    new Category {Name = "Dining", Description = "Expenses made on eating outside."},
                    new Category {Name = "Cloths", Description = "Expenses made on cloths."},
                    new Category {Name = "Telephone Expenses", Description = "Expenses made on landline, mobile bill etc."},
                    new Category {Name = "Fuel", Description = "Expenses made on vehicle fule."}
                };

                dbContext.Categories.AddRange(categories);
            }

            dbContext.SaveChanges();
        }
    }
}
