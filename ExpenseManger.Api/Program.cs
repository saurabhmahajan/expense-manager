using System;
using ExpenseManager.Sql;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace ExpenseManger.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost webHost = BuildWebHost(args);

            using (var scope = webHost.Services.CreateScope())
            {
                try
                {
                    var dbContext = scope.ServiceProvider.GetService<ExpenseManagerDbContext>();
                    DbSeeder.Seed(dbContext);
                }
                catch (Exception e)
                {
                    ILogger<Program> logger = scope.ServiceProvider.GetService<ILogger<Program>>();
                    logger.LogError(e, "An error occured while seeding database.");
                }
            }

            webHost.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
