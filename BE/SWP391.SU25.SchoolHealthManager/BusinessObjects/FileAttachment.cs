using System.ComponentModel.DataAnnotations;
using BusinessObjects.Common;

namespace BusinessObjects
{
    public class FileAttachment : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public ReferenceType ReferenceType { get; set; }
        public Guid ReferenceId { get; set; }
        [MaxLength(500)]
        public string FilePath { get; set; }
        [MaxLength(50)]
        public string FileType { get; set; }
    }
}
