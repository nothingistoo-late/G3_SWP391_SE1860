using System.ComponentModel.DataAnnotations;
using BusinessObjects.Common;

namespace BusinessObjects
{
    public class HealthEvent : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public EventType EventType { get; set; }
        public string Description { get; set; }
        public DateTime OccurredAt { get; set; }
        public ScheduleStatus EventStatus { get; set; }
        [MaxLength(450)]
        public string ReportedBy { get; set; }
        public User ReportedUser { get; set; }
        public ICollection<EventMedication> EventMedications { get; set; }
    }
}
