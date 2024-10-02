using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{
    [HttpPost]
    public IActionResult ReceiveData([FromBody] LoginDataStructure data)
    {
        if(data == null)
        {
            return BadRequest( new { message = "prompt is void" });
        }
        if(string.IsNullOrEmpty(data.email))
        {
            return BadRequest( new { message = "email is void." });
        }
        if(string.IsNullOrEmpty(data.password))
        {
            return BadRequest( new { message = "password is void." });
        }
        Console.WriteLine($"Email is {data.email}");
        Console.WriteLine($"Password is {data.password}");
        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(data.password);
        // bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        return Ok(new { message = "Datos recibidos correctamente." });
    }
}

public class LoginDataStructure
{
    public required string email { get; set; }
    public required string password { get; set; }
}

[Route("api/register")]
public class RegisterController : ControllerBase
{
    private readonly UserService _userService;

    public RegisterController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public IActionResult ReceiveData([FromBody] UserStructure data)
    {
        //Check data input
        if(data == null)
        {
            return BadRequest( new { message = "prompt is void" });
        }
        if(string.IsNullOrEmpty(data.email))
        {
            return BadRequest( new { message = "email is void." });
        }
        if(string.IsNullOrEmpty(data.password))
        {
            return BadRequest( new { message = "password is void." });
        }
        if(string.IsNullOrEmpty(data.dni))
        {
            return BadRequest( new { message = "dni is void." });
        }
        if(string.IsNullOrEmpty(data.telephone))
        {
            return BadRequest( new { message = "telephone is void." });
        }
        if(string.IsNullOrEmpty(data.address))
        {
            return BadRequest( new { message = "address is void." });
        }
        
        //Create hash of the password
        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(data.password);
        data.password = hashedPassword;

        Console.WriteLine(_userService.findUserByDNI("47020963") == null);


        //Check unique person
        if(_userService.findUserByEmail(data.email) != null)
        {
            return BadRequest(new { message = "Email is alredy registered." });
        }
        if(_userService.findUserByDNI(data.dni) != null)
        {
            return BadRequest(new { message = "DNI is alredy registered." });            
        }

        _userService.AddUser(data);
        // bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, hashedPassword); 
        return Ok(new { message = "Registered user" });
    }
}

public class UserStructure
{
    [BsonId] // Indica que este es el identificador del documento en MongoDB
    [BsonRepresentation(BsonType.ObjectId)] // Define que el ID es de tipo ObjectId en MongoDB
    public string? _id { get; set; }
    public required string email { get; set; }
    public required string password { get; set; }
    public required string dni { get; set; }
    public required string telephone { get; set; }
    public required string address { get; set; }
    public required DateTime dateBirth { get; set; }
}
