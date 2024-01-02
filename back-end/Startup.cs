// Startup.cs в back-end проекта

public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddCors(options =>
    {
        options.AddDefaultPolicy(
            builder =>
            {
                builder.WithOrigins("http://localhost:3000") // Адресът на вашия React приложение
                       .AllowAnyHeader()
                       .AllowAnyMethod();
            });
    });
    // ...
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // ...
    app.UseCors();
    // ...
}
