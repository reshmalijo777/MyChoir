using Microsoft.AspNetCore.Mvc;
using Choir.API.Models;

namespace Choir.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JoinController : ControllerBase
    {
        [HttpPost]
        public IActionResult Join([FromBody] Member member)
        {
            Console.WriteLine($"New Member: {member.Name}");

            return Ok(new { message = "Successfully joined choir!" });
        }
    }
}