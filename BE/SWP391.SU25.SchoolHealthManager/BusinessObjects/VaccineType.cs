using System.ComponentModel.DataAnnotations;

namespace BusinessObjects
{
    public class VaccineType : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(10)]
        public string Code { get; set; }
        [MaxLength(200)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Group { get; set; }
        public bool IsActive { get; set; }
    }
}
