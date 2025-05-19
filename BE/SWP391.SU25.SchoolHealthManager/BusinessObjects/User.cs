using System.ComponentModel.DataAnnotations;
using BusinessObjects.Common;
using Microsoft.AspNetCore.Identity;

namespace BusinessObjects
{
    public class User : IdentityUser<Guid>
    {
        [MaxLength(100)]
        public string FirstName { get; set; }
        [MaxLength(100)]
        public string LastName { get; set; }
        public Gender Gender { get; set; }

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
