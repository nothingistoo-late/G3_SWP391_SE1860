using System.ComponentModel.DataAnnotations;

namespace BusinessObjects
{
    public class StaffProfile : BaseEntity
    {
        [Key]
        [MaxLength(450)]
        public string UserId { get; set; }
        public User User { get; set; }
        [MaxLength(100)]
        public string Position { get; set; }
        [MaxLength(100)]
        public string Department { get; set; }
    }
}
