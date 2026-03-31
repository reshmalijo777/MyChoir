using Microsoft.AspNetCore.Mvc;
using Choir.API.Models;
using Choir.API.Services;

[ApiController]
[Route("api/[controller]")]
public class JoinController : ControllerBase
{
    private readonly DynamoService _dynamo;  

    public JoinController(DynamoService dynamo)
    {
        _dynamo = dynamo;  
    }

    [HttpPost]
    public async Task<IActionResult> Join([FromBody] Member member)
    {
        await _dynamo.SaveMemberAsync(member);

        return Ok(new { message = $"{member.Name} saved to AWS!" });
    }
}