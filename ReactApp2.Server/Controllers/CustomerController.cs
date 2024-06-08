using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp2.Server.Data;
using ReactApp2.Server.Models;

namespace ReactApp2.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly TestDBContext _db;

        public CustomerController(TestDBContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _db.Customer.ToListAsync();
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Customer>> GetCustomerbyId(int Id)
        {
            var customer = await _db.Customer.FindAsync(Id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpPost(Name = "AddCustomer")]
        public async Task<ActionResult<Customer>> AddCustomer(Customer customer)
        {
            _db.Customer.Add(customer);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCustomerbyId), new { id = customer.Id }, customer);
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> EditCustomer(int Id, Customer customer)
        {
            customer.Id = Id;

            _db.Entry(customer).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                bool existing = _db.Customer.Any(c => c.Id == Id);
                if (!existing)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteCustomer(int Id)
            {
            var customer = await _db.Customer.FindAsync(Id);
            if (customer == null)
            {
                return NotFound();
            }
            _db.Customer.Remove(customer);
            await _db.SaveChangesAsync();

            return NoContent();
        }

    }
}
