using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BusinessObjects
{
    public class Role : IdentityRole<Guid>
    {
        // Audit fields
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        [MaxLength(450)]
        public string CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
        [MaxLength(450)]
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
