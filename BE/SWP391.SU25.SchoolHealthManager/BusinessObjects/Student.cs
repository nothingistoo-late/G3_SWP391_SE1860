using System.ComponentModel.DataAnnotations;

namespace BusinessObjects
{
    public class Student : BaseEntity  
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(20)]
        public string Grade { get; set; }
        [MaxLength(10)]
        public string Section { get; set; }
        public DateTime DateOfBirth { get; set; }
        [MaxLength(150)]
        public string Image { get; set; }
        public ICollection<Parent> Parents { get; set; }
    }
}
