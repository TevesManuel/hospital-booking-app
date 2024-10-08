using MongoDB.Bson;
using MongoDB.Driver;

namespace Services
{
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
    }
}