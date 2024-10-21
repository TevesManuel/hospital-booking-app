using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly Services.UserService _userService;

        public UserController(Services.UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ReceiveData([FromBody] UserStructure data)
        {
            List<UserStructure> users = _userService.GetAllUsers();
            Console.WriteLine("\n\nGET\n\n");
            return BadRequest(new { message="asd" });
        }
    }

}