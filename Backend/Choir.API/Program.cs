using Amazon;
using Amazon.DynamoDBv2;
using Amazon.Extensions.NETCore.Setup;
using Choir.API.Services;
using Amazon.SQS;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDefaultAWSOptions(new AWSOptions
{
    Region = RegionEndpoint.USEast1
});
builder.Services.AddAWSService<IAmazonSQS>();
builder.Services.AddScoped<SqsService>();

builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<DynamoService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();

//app.MapGet("/", () => "🎵 Choir API is running");

app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();