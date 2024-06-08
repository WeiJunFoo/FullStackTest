using System.ComponentModel.DataAnnotations;

namespace ReactApp2.Server.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "First Name is mandatory.")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last Name is mandatory.")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Phone number is mandatory")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Email is mandatory")]
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }

    }
}
