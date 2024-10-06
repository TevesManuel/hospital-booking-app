using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;

public class UserService
{
    private readonly IMongoCollection<UserStructure> _usersCollection;

    public UserService(MongoDBContext mongoDbConnection)
    {
        // Obtener la colección de usuarios
        _usersCollection = mongoDbConnection.GetDatabase().GetCollection<UserStructure>("users");
    }

    public void AddUser(UserStructure user)
    {
        user.type = "patient";
        _usersCollection.InsertOne(user);
    }

    public List<UserStructure> GetAllUsers()
    {
        return _usersCollection.Find(FilterDefinition<UserStructure>.Empty).ToList();
    }

    public UserStructure findUserByEmail(string email)
    {
        var filter = Builders<UserStructure>.Filter.Eq(u => u.email, email);
        return _usersCollection.Find(filter).FirstOrDefault();
    }
    
    public UserStructure findUserByDNI(string dni)
    {
        var filter = Builders<UserStructure>.Filter.Eq(u => u.dni, dni);
        return _usersCollection.Find(filter).FirstOrDefault();
    }

    public UserStructure? login(LoginDataStructure loginDataStructure)
    {
        UserStructure user = findUserByEmail(loginDataStructure.email);
        Console.WriteLine(user.ToJson().ToString());
        if(user != null)
        {
            if(BCrypt.Net.BCrypt.Verify(
                loginDataStructure.password, 
                user.password
            ))
                return user;
        }
        return null;
    }
    public string? GenerateJwtToken(UserStructure user)
    {
        var claims = new[]
        {
            new Claim("email", user.email),
            new Claim("names", user.names),
            new Claim("lastNames", user.lastNames),
            new Claim("birthDate", user.dateBirth),
            new Claim("type", "patient")
        };
        string? secretKey = Environment.GetEnvironmentVariable("JWT_SECRET_KEY");
        if(secretKey != null)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
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