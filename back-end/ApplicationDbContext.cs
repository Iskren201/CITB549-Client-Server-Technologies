// ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public DbSet<Comment> Comments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Конфигурирайте своята връзка с базата данни
        optionsBuilder.UseSqlServer("Вашата SQL Server връзка");
    }
}
