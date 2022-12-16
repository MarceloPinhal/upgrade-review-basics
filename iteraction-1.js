const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories=[];
for (const movie of movies) {
        categories.push(movie.categories);  
    } 

for (category of categories){
console.log(category)
    for (value of category){
        console.log(value);
      if (!category.includes(value)){
        console.log(value);
      }
    }
}

