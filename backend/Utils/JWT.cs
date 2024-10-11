using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

public class JWT
{
    private static readonly JWT _instance = new JWT();
    private readonly string _secretKey;

    private JWT() 
    {
        _secretKey = Environment.GetEnvironmentVariable("JWT_SECRET_KEY") 
                     ?? throw new InvalidOperationException("\"JWT_SECRET_KEY\" is not seteed in the enviorement vars.");
    }

    public static JWT Instance
    {
        get
        {
            return _instance;
        }
    }


    public string? GenerateUserToken(UserStructure user)
    {
        var claims = new[]
        {
            new Claim("email", user.email),
            new Claim("names", user.names),
            new Claim("lastNames", user.lastNames),
            new Claim("birthDate", user.dateBirth),
            new Claim("type", "patient")
        };
        if(_secretKey != null)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "teves-hospital-booking-app",
                audience: "teves-hospital-booking-app",
                claims: claims,
                expires: DateTime.Now.AddHours(24),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        return null;

    }

    public string? GenerateManagerToken()
    {
        var claims = new[]
        {
            new Claim("type", "manager")
        };
        if(_secretKey != null)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "teves-hospital-booking-app",
                audience: "teves-hospital-booking-app",
                claims: claims,
                expires: DateTime.Now.AddHours(24),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        return null;
    }
}