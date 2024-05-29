import { color1, color2, color3 } from "@/lib/constants";
import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: `${color3}` }} className="py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div>
            <img
              src="/creme_com_cheiro_2.png" // Asegúrate de ajustar la ruta de la imagen
              alt="Logo"
              className="h-16"
            />
          </div>
          <ul className="text-white mb-6 md:mb-0 flex flex-col gap-5">
            <li className="text-lg">(11) 3456-7890</li>
            <li className="text-lg">info@meusite.com</li>
            <li className="text-lg">
              Rua Prates, 194 - Bom Retiro, São Paulo - SP, 01121-000
            </li>
            <li className="text-lg cursor-pointer">
              <p>
                Siga-nos no instagram: <Instagram />
              </p>
            </li>
          </ul>
          <div className="text-white text-center md:text-left">
            <h3 className="text-lg mb-2">
              Fique informado, inscreva-se em nossa newsletter
            </h3>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Insira seu email aqui *"
                className="mb-2 md:mb-0 md:mr-2 px-3 py-2 rounded bg-white text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors"
              >
                Enviar
              </button>
            </form>
            <p className="text-xs mt-2">Obrigado por se inscrever!</p>
          </div>
        </div>
      </footer>
      <div
        className="p-10 flex justify-center items-center"
        style={{ backgroundColor: `${color2}` }}
      >
        <p className="text-center text-xs text-white">
          &copy; 2024 Powered by{" "}
          <Link href="/" className="hover:underline hover:text-purple-500">
            PERSEPHONE
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
