using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/register")]
    public class RegisterController : ControllerBase
    {
        private readonly Services.UserService _userService;

        public RegisterController(Services.UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult ReceiveData([FromBody] UserStructure data)
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
            
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(data.password);
            data.password = hashedPassword;

            Console.WriteLine(_userService.findUserByDNI("47020963") == null);

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

}