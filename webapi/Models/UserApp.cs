using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class UserApp
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(150)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public string Age { get; set; }

        [Required]
        [Column(TypeName = "varchar(255)")]
        public string Password { get; set; }
    }
}
