using Amazon.DynamoDBv2;
using Amazon.Extensions.NETCore.Setup;
using Choir.API.Services;   


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<DynamoService>();

// Add services
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();