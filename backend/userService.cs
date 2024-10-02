using MongoDB.Driver;
using System.Collections.Generic;

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
        var filter = Builders<UserStructure>.Filter.Eq(u => u.email, dni);
        return _usersCollection.Find(filter).FirstOrDefault();
    }
}