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
            string? managerPassword = Environment.GetEnvironmentVariable("MANAGER_PASSWORD");
            if(managerPassword != null)
            {
                if(data.email == "manager" && data.password == managerPassword)
                {
                    string? token = JWT.Instance.GenerateManagerToken();
                    return StatusCode(200, new {
                        token
                    });
                }
            }
            UserStructure? user = _userService.login(data);
            Console.WriteLine($"Login return {user != null}");
            if(user != null)
            {
                string? token = JWT.Instance.GenerateUserToken(user);
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