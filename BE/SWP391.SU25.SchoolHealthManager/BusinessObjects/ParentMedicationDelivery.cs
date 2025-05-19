using System.ComponentModel.DataAnnotations;

namespace BusinessObjects
{
    public class ParentMedicationDelivery : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public int QuantityDelivered { get; set; }
        public DateTime DeliveredAt { get; set; }
        public Guid DeliveredBy { get; set; }
        public Parent Parent { get; set; }
        [MaxLength(450)]
        public string ReceivedBy { get; set; }
        public User ReceivedUser { get; set; }
        public string Notes { get; set; }
    }
}
