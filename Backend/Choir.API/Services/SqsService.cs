using Amazon.SQS;
using Amazon.SQS.Model;
using System.Text.Json;
using System.Threading.Tasks;

namespace Choir.API.Services
{
    public class SqsService
    {
        private readonly IAmazonSQS _sqs;
        private readonly string _queueUrl;

        public SqsService(IAmazonSQS sqs, IConfiguration config)
        {
            _sqs = sqs;
            _queueUrl = config["AWS:QueueUrl"];
        }

        public async Task SendMessageAsync(object data)
        {
            var request = new SendMessageRequest
            {
                QueueUrl = _queueUrl,
                MessageBody = JsonSerializer.Serialize(data)
            };

            await _sqs.SendMessageAsync(request);
        }
    }
}