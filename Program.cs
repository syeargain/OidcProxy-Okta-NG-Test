using OidcProxy.Net.ModuleInitializers;
using OidcProxy.Net.Okta;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration.GetSection("OidcProxy").Get<OktaProxyConfig>();
//builder.Services.AddOidcProxy(config);

builder.Services.AddOidcProxy(config);
//    (o =>
//{

//    o.RegisterIdentityProvider<OktaIdentityProvider, OktaConfig>(config.Okta);
//    o.ConfigureYarp(o =>
//    {
//        o.LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
//    });
//});



var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseOidcProxy();

app.Run();
