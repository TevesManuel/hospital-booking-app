using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly UserService _userService;

    public LoginController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [AllowAnonymous]
    public IActionResult ReceiveData([FromBody] LoginDataStructure data)
    {
        // Console.WriteLine(data == null);
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
        UserStructure? user = _userService.login(data);
        Console.WriteLine($"Login return {user != null}");
        if(user != null)
        {
            string? token = _userService.GenerateJwtToken(user);
            if(token != null)
            {
                return StatusCode(200,  new { token });
            }
            return StatusCode(500, new { message = "Internal server error." });
        }
        return BadRequest(new { message = "Email or password are wrong." });
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
        // Console.WriteLine(data == null);

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
        if(string.IsNullOrEmpty(data.names))
        {
            return BadRequest( new { message = "names is void." });
        }
        if(string.IsNullOrEmpty(data.lastNames))
        {
            return BadRequest( new { message = "last names is void." });
        }
        if(string.IsNullOrEmpty(data.dni))
        {
            return BadRequest( new { message = "dni is void." });
        }
        if(string.IsNullOrEmpty(data.telephone))
        {
            return BadRequest( new { message = "telephone is void." });
        }
        if(string.IsNullOrEmpty(data.locality))
        {
            return BadRequest( new { message = "locality is void." });
        }
        if(string.IsNullOrEmpty(data.zipCode))
        {
            return BadRequest( new { message = "zip code is void." });
        }
        if(string.IsNullOrEmpty(data.dateBirth))
        {
            return BadRequest( new { message = "date birth is void." });
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
        return Ok(data);
    }
}

public class UserStructure
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }
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