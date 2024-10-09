using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/login")]
    public class LoginController : ControllerBase
    {
        private readonly Services.UserService _userService;

        public LoginController(Services.UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
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
            string? adminPassword = Environment.GetEnvironmentVariable("ADMIN_PASSWORD");
            if(adminPassword != null)
            {
                if(data.email == "admin" && data.password == adminPassword)
                {
                    return StatusCode(200, new {
                        names = "Admin"
                    });
                }
            }
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

}

public class LoginDataStructure
{
    public required string email { get; set; }
    public required string password { get; set; }
}