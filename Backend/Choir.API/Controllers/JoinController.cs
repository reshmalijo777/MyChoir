using Microsoft.AspNetCore.Mvc;
using Choir.API.Models;
using Choir.API.Services;

[ApiController]
[Route("api/[controller]")]
public class JoinController : ControllerBase
{
    private readonly DynamoService _dynamo;
    private readonly SqsService _sqs;

    public JoinController(DynamoService dynamo, SqsService sqs)
    {
        _dynamo = dynamo;
        _sqs = sqs;
    }


    [HttpPost("direct")]
    public async Task<IActionResult> JoinDirect(Member member)
    {
        await _dynamo.SaveMemberAsync(member);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetMembers()
    {
        var members = await _dynamo.GetAllMembersAsync();
        return Ok(members);
    }


    [HttpPost]
    public async Task<IActionResult> Join([FromBody] Member member)
    {
        try
        {
            await _sqs.SendMessageAsync(member);   
        }
        catch (Exception ex)
        {
            Console.WriteLine("SQS ERROR: " + ex.Message); 
        }

        await _dynamo.SaveMemberAsync(member);     

        return Ok(new { message = "Saved!" });
    }
}