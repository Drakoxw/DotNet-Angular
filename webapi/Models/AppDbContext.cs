using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }

        public DbSet<CreditCard> CreditCards { get; set; }
        public DbSet<UserApp> UserApp { get; set; }

    }
}
