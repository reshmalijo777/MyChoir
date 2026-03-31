using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Choir.API.Models;
using System.Threading.Tasks;

namespace Choir.API.Services   
{
    public class DynamoService
    {
        private readonly DynamoDBContext _context;

        public DynamoService(IAmazonDynamoDB dynamoDb)
        {
            _context = new DynamoDBContext(dynamoDb);
        }

        public async Task SaveMemberAsync(Member member)
        {
            await _context.SaveAsync(member);
        }

        public async Task<List<Member>> GetAllMembersAsync()
        {
            var conditions = new List<ScanCondition>();

            return await _context.ScanAsync<Member>(conditions).GetRemainingAsync();
        }
    }
}