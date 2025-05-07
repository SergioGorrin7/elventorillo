import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorillo%20de%20lado-Ah01k8vXDpWqFtDS2SyDuycOB0tdvf.webp"
          alt="El Ventorrillo Restaurante"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">El Ventorrillo</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Auténtica cocina canaria en el corazón de Los Cristianos</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="#menu">Ver Menú</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="#contacto">Reservar Mesa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bienvenida */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-amber-800 font-serif">Bienvenidos a El Ventorrillo</h2>
              <p className="text-lg mb-4 text-gray-700">
                Le damos la más cordial bienvenida a El Ventorrillo, un rincón de auténtico sabor canario en Los
                Cristianos, Tenerife. Nuestro restaurante ofrece una experiencia gastronómica única, donde los sabores
                tradicionales de las Islas Canarias se fusionan con ingredientes frescos y locales para crear platos que
                deleitarán su paladar.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Con vistas al mar y un ambiente acogedor, El Ventorrillo es el lugar perfecto para disfrutar de una
                comida inolvidable en compañía de familiares y amigos.
              </p>
              <div className="flex items-center gap-2 text-amber-700">
                <Phone size={20} />
                <p className="font-medium">Reservas: 922 02 02 68</p>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorrillo%20dentro-2XbUnA8gFjI67cO3NBrdaijJN35fVF.webp"
                alt="Interior de El Ventorrillo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800 font-serif">Sobre Nosotros</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorrilo%20fuera-Vqjehf1D9V7m9QlHRfBY27OEhfQxuY.webp"
                alt="Terraza de El Ventorrillo"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Nuestra Historia</h3>
              <p className="text-lg mb-4 text-gray-700">
                El Ventorrillo nació del amor por la gastronomía canaria y el deseo de compartir los sabores auténticos
                de nuestra tierra con locales y visitantes. Ubicado en el encantador barrio de Los Cristianos, nuestro
                restaurante se ha convertido en un referente de la cocina tradicional canaria en Tenerife.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Nos enorgullecemos de utilizar productos frescos de la isla, seleccionados cuidadosamente para
                garantizar la máxima calidad en cada plato. Nuestro equipo, como una gran familia, se dedica a ofrecer
                un servicio cálido y cercano, haciendo que cada visita sea especial.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Con una atmósfera que combina la tradición canaria con toques modernos, El Ventorrillo es el lugar ideal
                tanto para turistas que desean descubrir la auténtica gastronomía local como para residentes que buscan
                el sabor de siempre en un ambiente acogedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menú */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800 font-serif">Nuestro Menú</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
            En El Ventorrillo ofrecemos una selección de platos tradicionales canarios, elaborados con ingredientes
            frescos y locales que resaltan los sabores auténticos de nuestra tierra.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sardinas-P97dY2sE209reqVy02XzVFNheuAVun.webp"
                  alt="Sardinas con papas arrugadas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pescado Fresco del Día</h3>
                <p className="text-gray-700">
                  Selección de pescados frescos del mar canario, preparados a la plancha y servidos con papas arrugadas
                  y mojo.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carne%20fiesta.jpg-2RqAiy98qejfB11kymvwQsMCdzcamE.jpeg"
                  alt="Carne de fiesta"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Carne de Fiesta</h3>
                <p className="text-gray-700">
                  Tradicional plato canario de carne de cerdo adobada y frita, servida con papas y mojo.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/papas-arrugadas-con-mojo-picon-241.jpg-gpV4eZ6LrlKH1qpv6IM1V2rffVAhKX.jpeg"
                  alt="Papas arrugadas con mojo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Papas Arrugadas con Mojo</h3>
                <p className="text-gray-700">
                  El plato más emblemático de la cocina canaria, papas pequeñas cocidas en agua de mar y servidas con
                  mojo rojo y verde.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gofio-escaldado-o-escaldon-de-gofio.jpg-ZBuMBemHeOZ3RK4fkJvzxcy40Do90m.jpeg"
                  alt="Gofio escaldado"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gofio Escaldado</h3>
                <p className="text-gray-700">
                  Preparación tradicional a base de gofio (harina de cereales tostados), caldo de pescado y cebolla.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conejo-en-salmorejo_00000000_240321155305_1280x720.jpg-coi69wCpBsDz73srE7hBKYgwHtZQZX.jpeg"
                  alt="Conejo en salmorejo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Conejo en Salmorejo</h3>
                <p className="text-gray-700">
                  Conejo macerado y guisado en una salsa típica canaria con especias y hierbas aromáticas.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bienmesabe_REC.jpg-8JLYh7BJIPCAQ6YBzZVOgxo2otqBdJ.jpeg"
                  alt="Bienmesabe"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bienmesabe</h3>
                <p className="text-gray-700">
                  Delicioso postre tradicional elaborado con almendras, huevo, azúcar y canela.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="#contacto" className="flex items-center gap-2">
                Reservar Mesa <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-800 font-serif">Nuestra Galería</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
            Descubra el encanto de El Ventorrillo a través de nuestra galería de imágenes. Desde nuestro acogedor
            ambiente rústico y vistas al mar, hasta nuestros coloridos platos de cocina canaria y la calidez de nuestro
            servicio. Las imágenes son solo un aperitivo de la experiencia que le espera. ¡Venga a descubrirlo en
            persona!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorillo%20de%20lado-Ah01k8vXDpWqFtDS2SyDuycOB0tdvf.webp"
                alt="Exterior de El Ventorrillo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorrillo%20dentro-2XbUnA8gFjI67cO3NBrdaijJN35fVF.webp"
                alt="Interior de El Ventorrillo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ventorrilo%20fuera-Vqjehf1D9V7m9QlHRfBY27OEhfQxuY.webp"
                alt="Terraza de El Ventorrillo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sardinas-P97dY2sE209reqVy02XzVFNheuAVun.webp"
                alt="Sardinas con papas arrugadas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carne%20fiesta.jpg-2RqAiy98qejfB11kymvwQsMCdzcamE.jpeg"
                alt="Carne de fiesta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/papas-arrugadas-con-mojo-picon-241.jpg-gpV4eZ6LrlKH1qpv6IM1V2rffVAhKX.jpeg"
                alt="Papas arrugadas con mojo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800 font-serif">Contacto</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-amber-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-amber-700">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Dirección:</p>
                      <p className="text-gray-700">
                        P.º Dulce María Loinaz, 18, 38650 Los Cristianos, Santa Cruz de Tenerife
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Teléfono:</p>
                      <p className="text-gray-700">922 02 02 68</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Horario:</p>
                      <p className="text-gray-700">Miércoles a Domingo: 13:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-lg mb-4">
                    Le invitamos a reservar su mesa llamando a nuestro teléfono. Estaremos encantados de atenderle y
                    proporcionarle toda la información que necesite sobre nuestro restaurante y menú.
                  </p>
                  <p className="text-lg font-medium text-amber-700">
                    ¡Esperamos darle la bienvenida pronto a El Ventorrillo!
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0123456789!2d-16.7199!3d28.0498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sP.%C2%BA%20Dulce%20Mar%C3%ADa%20Loinaz%2C%2018%2C%2038650%20Los%20Cristianos%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de El Ventorrillo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold font-serif">El Ventorrillo</h2>
              <p className="mt-2">Auténtica cocina canaria</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="#sobre-nosotros" className="hover:underline">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#menu" className="hover:underline">
                      Menú
                    </Link>
                  </li>
                  <li>
                    <Link href="#galeria" className="hover:underline">
                      Galería
                    </Link>
                  </li>
                  <li>
                    <Link href="#contacto" className="hover:underline">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Contacto</h3>
                <p>P.º Dulce María Loinaz, 18</p>
                <p>38650 Los Cristianos</p>
                <p>Santa Cruz de Tenerife</p>
                <p className="mt-2">Tel: 922 02 02 68</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-amber-700 text-center">
            <p>&copy; {new Date().getFullYear()} El Ventorrillo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
