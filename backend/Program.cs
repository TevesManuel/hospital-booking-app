using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;


public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>()
                          .UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), "../frontend/build"));
            });
}

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Puedes agregar servicios aquí si es necesario
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

        string currentDirectory = Directory.GetCurrentDirectory();
        string fullDirectory = Path.Combine(currentDirectory, "../frontend/build");
        Console.WriteLine(fullDirectory);

        // Servir archivos de la carpeta build de React
        app.UseStaticFiles();

        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapFallbackToFile("index.html"); // Mapea todas las rutas a index.html
        });
    }
}
