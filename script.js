const races = [
    { name: "Humano", description: "Una raza versátil y adaptable." },
    { name: "Elfo", description: "Seres longevos con habilidades mágicas." },
    { name: "Enano", description: "Pequeños pero fuertes, expertos en minería." },
    { name: "Orco", description: "Raza guerrera, fuerte y resistente." },
    { name: "Goblin", description: "Criaturas pequeñas, astutas y rápidas." },
    { name: "Troll", description: "Gigantes con gran regeneración y fuerza." },
    { name: "Vampiro", description: "Seres nocturnos, fuertes y con habilidades mágicas." },
    { name: "Hombre Lobo", description: "Transformables en lobos, con gran poder físico." },
    { name: "Dragón", description: "Criaturas míticas con capacidades de vuelo y fuego." },
    { name: "Fénix", description: "Ave mítica que renace de sus cenizas, inmortal." },
    { name: "Ángel", description: "Seres celestiales con habilidades curativas y de luz." },
    { name: "Demonio", description: "Seres infernales con habilidades oscuras y destructivas." },
    { name: "Hada", description: "Criaturas mágicas, pequeñas y muy astutas." },
    { name: "Sirena", description: "Seres acuáticos, con voz hipnótica y habilidades subacuáticas." },
    { name: "Vulcano", description: "Seres de fuego, resistentes al calor y con poder de lanzar llamas." },
    { name: "Neko (Humano con orejas de gato)", description: "Personas con características de gatos, ágiles y con gran vista." },
    { name: "Fauno", description: "Criaturas mitad hombre, mitad cabra, con habilidades naturales." },
    { name: "Yeti", description: "Gigantes de las montañas, conocidos por su fuerza y resistencia al frío." },
    { name: "Ciclope", description: "Gigantes con un solo ojo, poderosos y resistentes." },
    { name: "Centauro", description: "Mitad humano, mitad caballo, expertos en combate con arcos." }
];

const classes = [
    { name: "Guerrero", description: "Experto en combate cuerpo a cuerpo, fuerza y resistencia." },
    { name: "Mago", description: "Especializado en magia elemental, con grandes poderes arcanos." },
    { name: "Ladrón", description: "Maestro del sigilo y el robo, ágil y astuto." },
    { name: "Arquero", description: "Especializado en el uso de arco y flechas, muy ágil." },
    { name: "Hechicero", description: "Conocimiento profundo en hechizos oscuros y magia antigua." },
    { name: "Bárbaro", description: "Luchador salvaje, con gran poder físico y furia en combate." },
    { name: "Clérigo", description: "Sanador con poderes divinos, puede curar y proteger a sus compañeros." },
    { name: "Asesino", description: "Especialista en eliminar rápidamente a sus enemigos, sigiloso y letal." },
    { name: "Paladín", description: "Guerrero sagrado, protector de los inocentes y defensor de la justicia." },
    { name: "Hechicero", description: "Con gran conocimiento de los secretos arcanos y las artes oscuras." },
    { name: "Bardos", description: "Usa música mágica para inspirar y curar a sus aliados." },
    { name: "Druida", description: "Guardianes de la naturaleza, capaces de transformarse en animales." },
    { name: "Ranger", description: "Maestro del sigilo en la naturaleza y la supervivencia." },
    { name: "Necromante", description: "Controlador de muertos vivientes, domina las artes oscuras." },
    { name: "Conjurador", description: "Llamador de seres de otras dimensiones y mundos." },
    { name: "Samurái", description: "Guerrero disciplinado, experto en combate con katana." },
    { name: "Monje", description: "Maestro de las artes marciales, rápido y fuerte." },
    { name: "Warlock", description: "Vinculado a fuerzas oscuras, obtiene poderes a cambio de su alma." },
    { name: "Brujo", description: "Usa magia ancestral, a menudo con precios oscuros que pagar." }
];

const pets = [
    { name: "Perro", description: "Leal y fuerte, siempre al lado del héroe." },
    { name: "Gato", description: "Agil y astuto, siempre acompañando a su dueño." },
    { name: "Águila", description: "Rápida y con gran visión, perfecta para patrullar." },
    { name: "Lobo", description: "Fiel compañero, ágil y cazador." },
    { name: "Halcón", description: "Ágil y de gran vista, ideal para explorar el cielo." },
    { name: "Caballo", description: "Fuerte y rápido, ideal para desplazarse por grandes distancias." },
    { name: "Conejo", description: "Pequeño y rápido, buena mascota para ambientes tranquilos." },
    { name: "Rata", description: "Inteligente y adaptable, puede ayudar en el sigilo." },
    { name: "Tortuga", description: "Lenta pero resistente, ideal para acompañantes tranquilos." },
    { name: "Serpiente", description: "Sigilosa y venenosa, perfecta para misiones furtivas." },
    { name: "Zorro", description: "Astuto y veloz, excelente para misiones rápidas." },
    { name: "Dragón Pequeño", description: "Pequeño pero feroz, capaz de lanzar fuego." },
    { name: "Fénix", description: "Ave mítica que renace de sus cenizas, inmortal." },
    { name: "Lince", description: "Cazador silencioso, rápido y preciso." },
    { name: "Grifo", description: "Criatura majestuosa con la cabeza de un águila y el cuerpo de un león." },
    { name: "Unicornio", description: "Místico y mágico, símbolo de pureza y belleza." },
    { name: "Quimera", description: "Criatura legendaria con cabeza de león, cuerpo de cabra y cola de serpiente." },
    { name: "Basilisco", description: "Serpiente gigante con mirada petrificante." },
    { name: "Cérbero", description: "Perro de tres cabezas, guardián de los infiernos." },
    { name: "Mantícora", description: "Criatura mítica con cuerpo de león y cola de escorpión." },
    { name: "Kitsune", description: "Zorro mágico con múltiples colas y habilidades místicas." },
    { name: "Yeti", description: "Gigante de las montañas, conocidos por su fuerza y resistencia al frío." },
    { name: "Dragón de Hielo", description: "Dragón capaz de congelar a sus enemigos." },
    { name: "Fauno", description: "Mitad hombre, mitad cabra, con habilidades naturales." },
    { name: "Grifo de Fuego", description: "Grifo con poderes ígneos, capaz de lanzar llamas." },
    { name: "Furia Nocturna", description: "Dragón nocturno, rápido y feroz." },
    { name: "Pegaso", description: "Caballo alado, veloz y majestuoso." },
    { name: "Espíritu de Fuego", description: "Entidad elemental de fuego, ardiente y destructiva." },
    { name: "Espíritu de Agua", description: "Entidad elemental de agua, fluida y calmante." },
    { name: "Espíritu de Tierra", description: "Entidad elemental de tierra, sólida y resistente." },
    { name: "Espíritu del Viento", description: "Entidad elemental del viento, ágil y liviano." },
    { name: "Golem de Piedra", description: "Gigante de piedra, resistente y lento." },
    { name: "Elemento de Rayo", description: "Ser eléctrico, rápido y destructivo." },
    { name: "Fae (Hada)", description: "Criatura mágica con pequeñas alas, traviesa y encantadora." },
    { name: "Sombra de Bosque", description: "Criatura oscura, habitante de los bosques más remotos." },
    { name: "Dragon de Fuego", description: "Criatura mítica con gran control sobre el fuego." }
];

const elements = ["Agua", "Tierra", "Fuego", "Aire", "Rayo"];

document.getElementById("generateButton").addEventListener("click", () => {
    // Selección aleatoria de Raza, Clase, Mascota y Elementos
    const randomRace = races[Math.floor(Math.random() * races.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomPet = pets[Math.floor(Math.random() * pets.length)];
    const heroElement = elements[Math.floor(Math.random() * elements.length)];
    const petElement = elements[Math.floor(Math.random() * elements.length)];

    // Mostrar los resultados en la página
    document.getElementById("raceName").textContent = randomRace.name;  // Nombre de la raza
    document.getElementById("raceDesc").textContent = randomRace.description;

    document.getElementById("className").textContent = randomClass.name;  // Nombre de la clase
    document.getElementById("classDesc").textContent = randomClass.description;

    document.getElementById("petName").textContent = randomPet.name;  // Nombre de la mascota
    document.getElementById("petDesc").textContent = randomPet.description;

    document.getElementById("heroElement").textContent = `Elemento: ${heroElement}`;
    document.getElementById("petElement").textContent = `Elemento: ${petElement}`;

    // Mostrar el resultado
    document.getElementById("result").style.display = "block";
});
