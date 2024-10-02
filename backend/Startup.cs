using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;

using MongoDB.Driver;
using MongoDB.Bson;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // var collection = client.GetDatabase().GetCollection<UserStructureHTTP>("users");
        // var usuario = new UserStructureHTTP {email = "manuel", password="teves", address="C65 e/16 y 17", dateBirth=new DateTime(2006, 1, 10), dni="47020963", telephone="2213058662"};
        // collection.InsertOne(usuario);
        
        services.AddSingleton(new MongoDBContext());
        services.AddSingleton<UserService>();
        services.AddControllers();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapFallbackToFile("index.html");
        });
    }
}