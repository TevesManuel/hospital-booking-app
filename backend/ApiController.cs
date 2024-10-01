using Microsoft.AspNetCore.Mvc;

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

public class RegisterDataStructure
{
    public required string email { get; set; }
    public required string password { get; set; }
}
