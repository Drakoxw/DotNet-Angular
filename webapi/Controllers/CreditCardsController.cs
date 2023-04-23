using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CreditCardsController : Controller
    {
        private readonly AppDbContext _context;

        public CreditCardsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CreditCard>>> GetCreditCards()
        {
              return await _context.CreditCards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CreditCard>> Details(int? id)
        {
            if (id == null || _context.CreditCards == null)
            {
                return NotFound();
            }

            var creditCard = await _context.CreditCards
                .FirstOrDefaultAsync(m => m.Id == id);
            if (creditCard == null)
            {
                return NotFound();
            }

            return creditCard;
        }

        [HttpPost]
        public async Task<ActionResult> Create(
            [Bind("CardHolder,CardNumber,Expire,Cvv")] CreditCard creditCard)
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity();
            }

            _context.CreditCards.Add(creditCard);
            await _context.SaveChangesAsync();
            return Created("api/[Controller]", creditCard);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CreditCard>> Edit(int id, [Bind("Id,CardHolder,CardNumber,Expire,Cvv")] CreditCard creditCard)
        {
            if (id > 0 || id != creditCard.Id)
            {
                if (ModelState.IsValid)
                {
                    try
                    {
                        _context.CreditCards.Update(creditCard);
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!CreditCardExists(creditCard.Id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }
                    return creditCard;
                }
                    return UnprocessableEntity();
                }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            if (_context.CreditCards == null)
            {
                return Problem("Entity set 'AppDbContext.CreditCards'  is null.");
            }
            var creditCard = await _context.CreditCards.FindAsync(id);
            if (creditCard != null)
            {
                _context.CreditCards.Remove(creditCard);
            }
            
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool CreditCardExists(int id)
        {
          return (_context.CreditCards?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
