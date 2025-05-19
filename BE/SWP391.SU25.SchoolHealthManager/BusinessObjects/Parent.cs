using System.ComponentModel.DataAnnotations;
using BusinessObjects.Common;

namespace BusinessObjects
{
    public class Parent : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(450)]
        public string UserId { get; set; }
        public User User { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public Relationship Relationship { get; set; }
        public ICollection<HealthProfile> HealthProfiles { get; set; }
    }
}
