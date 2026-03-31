using Amazon.DynamoDBv2.DataModel;
using System;
namespace Choir.API.Models
{

    [DynamoDBTable("ChoirMembers")]
    public class Member
    {
        [DynamoDBHashKey]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Name { get; set; } = "";
        public string Email { get; set; } = "";
        public string Phone { get; set; } = "";
        public string VoiceType { get; set; } = "";
    }
}