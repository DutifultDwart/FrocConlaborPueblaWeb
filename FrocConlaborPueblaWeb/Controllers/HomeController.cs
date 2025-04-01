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
            string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/carrucel");
            string[] images = Directory.Exists(folderPath)
                ? Directory.GetFiles(folderPath)
                          .Where(file => file.EndsWith(".jpg") || file.EndsWith(".jpeg") || file.EndsWith(".png"))
                          .Select(file => "/img/carrucel/" + Path.GetFileName(file))
                          .ToArray()
                : new string[0]; 

            ViewBag.Images = images; 
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
        public IActionResult Prensa()
        {
            return View();
        }
        public IActionResult ContratoColectivo()
        {
            return View();
        }
        public IActionResult Login()
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
