using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : IdentityDbContext<User>
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }

// Funcția OnModelCreating configurează modelul de date pentru o aplicație utilizând Entity Framework. Aceasta adaugă inițial două roluri predefinite, "Member" și "Admin", asigurând disponibilitatea lor în baza de date pentru gestionarea securității utilizatorilor.
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
                .HasData(
                    new IdentityRole{Name = "Member", NormalizedName = "MEMBER"},
                    new IdentityRole{Name = "Admin", NormalizedName = "ADMIN"}
                );
        }
    }
}