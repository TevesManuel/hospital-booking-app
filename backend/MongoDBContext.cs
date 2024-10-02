using System.Runtime.CompilerServices;
using MongoDB.Driver;

public class MongoDBContext
{
    private readonly string dataBaseName = "hospital-booking";
    private readonly IMongoClient _client;
    private readonly IMongoDatabase _database;

    public MongoDBContext()
    {
        var connectionString = Environment.GetEnvironmentVariable("DB_URL");
        if (connectionString == null)
        {
            Console.WriteLine("You must set your 'DB_URL' environment variable. To learn how to set it, see https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#set-your-connection-string");
            Environment.Exit(0);
        }
        else
        {
            Console.WriteLine(connectionString);
        }
        Console.WriteLine("Connecting to the DB...");
        _client = new MongoClient(connectionString);
        Console.WriteLine("DB has been conected.");
        _database = _client.GetDatabase(dataBaseName);
    }

    public IMongoDatabase GetDatabase()
    {
        return _database;
    }
}