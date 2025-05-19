using System.ComponentModel.DataAnnotations;

namespace BusinessObjects
{
    public class Report : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(200)]
        public string Title { get; set; }
        [MaxLength(50)]
        public string ReportType { get; set; }
        public DateTime GeneratedAt { get; set; }
        [MaxLength(450)]
        public string CreatedBy { get; set; }
        public string Data { get; set; }
    }
}
