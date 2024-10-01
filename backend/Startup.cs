using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/login")]
public class DatosController : ControllerBase
{
    [HttpPost]
    public IActionResult RecibirDatos([FromBody] Datos datos)
    {
        Console.WriteLine("");
        Console.WriteLine("MENSAJE RECIBIDO!!!");
        Console.WriteLine("");
        return Ok(new { mensaje = "Datos recibidos correctamente" });
    }
}

public class Datos
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
}

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
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
        // Servir archivos de la carpeta build de React
        app.UseStaticFiles();

        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapFallbackToFile("index.html"); // Mapea todas las rutas a index.html
        });
    }
}