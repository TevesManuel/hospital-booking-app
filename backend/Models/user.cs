using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class UserStructure
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }
    public string? type { get; set; }
    public required string email { get; set; }
    public required string password { get; set; }
    public required string names { get; set; }
    public required string lastNames { get; set; }
    public required string dni { get; set; }
    public required string telephone { get; set; }
    public required string locality { get; set; }
    public required string zipCode { get; set; }
    public required string address { get; set; }
    public required string dateBirth { get; set; }
}