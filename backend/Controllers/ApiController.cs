using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

[Route("api/book")]
public class BookController : ControllerBase
{
    // private readonly UserService _userService;

    // public RegisterController(UserService userService)
    // {
    //     _userService = userService;
    // }

    [HttpPost]
    public IActionResult ReceiveData([FromBody] UserStructure data)
    {
        return Ok();
    }
}

public class TurnStructure
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public required string MedicId { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public required string PatientId { get; set; }
}