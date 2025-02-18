using FrocConlaborPueblaWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FrocConlaborPueblaWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Test()
        {
            return View();
        }

        public IActionResult STUTP()
        {
            return View();
        }
        public IActionResult noticias()
        {
            return View();
        }
        public IActionResult Colaboradores()
        {
            return View();
        }
        public IActionResult PrensaComunicados()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
