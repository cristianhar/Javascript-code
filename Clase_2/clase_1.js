//EJERCICIO 1 
const numero ="234";
let resultado= 0; 
for(let i of numero){
    //console.log(i);
    resultado += parseInt(i);
} 
console.log(resultado);


//EJERCICIO 2
for(let i = 1; i <= 11; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "-";
    }
    console.log(row);
}

for(let i = 10; i >= 1; i--) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "-";
    }
    
    console.log(row);
}
for(let i = 1; i <= 11; i++) {
    console.log("-".repeat(i));
}
for(let i = 10; i >= 1; i--) {
    console.log("-".repeat(i));
}



//2 Formatos Json y llamar map y foreach

const data ={
    "movies": [
      {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "genre": ["Sci-Fi", "Thriller"],
        "rating": 8.8,
        "duration": "148 minutes",
        "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        "budget": "$160 million",
        "box_office": "$829.9 million",
        "awards": [
          "Academy Award for Best Cinematography",
          "Academy Award for Best Sound Editing",
          "Academy Award for Best Sound Mixing",
          "Academy Award for Best Visual Effects"
        ],
        "cast": [
          {
            "name": "Leonardo DiCaprio",
            "role": "Dom Cobb"
          },
          {
            "name": "Joseph Gordon-Levitt",
            "role": "Arthur"
          },
          {
            "name": "Elliot Page",
            "role": "Ariadne"
          },
          {
            "name": "Tom Hardy",
            "role": "Eames"
          }
        ],
        "reviews": [
          {
            "critic": "Roger Ebert",
            "publication": "Chicago Sun-Times",
            "score": 4.5,
            "comment": "A mind-bending experience with a gripping storyline and stunning visuals."
          },
          {
            "critic": "Peter Travers",
            "publication": "Rolling Stone",
            "score": 4.0,
            "comment": "Inception is a rare Hollywood blockbuster that gets everything right."
          }
        ]
      },
      {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": ["Drama"],
        "rating": 9.3,
        "duration": "142 minutes",
        "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "budget": "$25 million",
        "box_office": "$58.3 million",
        "awards": [
          "Nominated for 7 Academy Awards",
          "Nominated for 2 Golden Globe Awards"
        ],
        "cast": [
          {
            "name": "Tim Robbins",
            "role": "Andy Dufresne"
          },
          {
            "name": "Morgan Freeman",
            "role": "Ellis Boyd 'Red' Redding"
          },
          {
            "name": "Bob Gunton",
            "role": "Warden Norton"
          },
          {
            "name": "William Sadler",
            "role": "Heywood"
          }
        ],
        "reviews": [
          {
            "critic": "James Berardinelli",
            "publication": "ReelViews",
            "score": 5.0,
            "comment": "Arguably the best prison movie of all time."
          },
          {
            "critic": "Janet Maslin",
            "publication": "The New York Times",
            "score": 4.0,
            "comment": "A moving, beautifully photographed film."
          }
        ]
      },
      {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "genre": ["Crime", "Drama"],
        "rating": 9.2,
        "duration": "175 minutes",
        "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "budget": "$6 million",
        "box_office": "$246-287 million",
        "awards": [
          "Academy Award for Best Picture",
          "Academy Award for Best Actor",
          "Academy Award for Best Adapted Screenplay"
        ],
        "cast": [
          {
            "name": "Marlon Brando",
            "role": "Don Vito Corleone"
          },
          {
            "name": "Al Pacino",
            "role": "Michael Corleone"
          },
          {
            "name": "James Caan",
            "role": "Sonny Corleone"
          },
          {
            "name": "Richard S. Castellano",
            "role": "Clemenza"
          }
        ],
        "reviews": [
          {
            "critic": "Vincent Canby",
            "publication": "The New York Times",
            "score": 5.0,
            "comment": "A movie of staggering power and beauty."
          },
          {
            "critic": "Roger Ebert",
            "publication": "Chicago Sun-Times",
            "score": 5.0,
            "comment": "It is a masterpiece of American cinema."
          }
        ]
      },
      {
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "genre": ["Action", "Crime", "Drama"],
        "rating": 9.0,
        "duration": "152 minutes",
        "synopsis": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "budget": "$185 million",
        "box_office": "$1.005 billion",
        "awards": [
          "Academy Award for Best Supporting Actor",
          "Academy Award for Best Sound Editing"
        ],
        "cast": [
          {
            "name": "Christian Bale",
            "role": "Bruce Wayne"
          },
          {
            "name": "Heath Ledger",
            "role": "Joker"
          },
          {
            "name": "Aaron Eckhart",
            "role": "Harvey Dent"
          },
          {
            "name": "Michael Caine",
            "role": "Alfred"
          }
        ],
        "reviews": [
          {
            "critic": "Richard Roeper",
            "publication": "Chicago Sun-Times",
            "score": 5.0,
            "comment": "The Dark Knight is a film that redefines the possibilities of superhero cinema."
          },
          {
            "critic": "Peter Travers",
            "publication": "Rolling Stone",
            "score": 4.5,
            "comment": "A towering achievement that soars on the strengths of its cast and director."
          }
        ]
      },
      {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genre": ["Crime", "Drama"],
        "rating": 8.9,
        "duration": "154 minutes",
        "synopsis": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "budget": "$8-8.5 million",
        "box_office": "$213.9 million",
        "awards": [
          "Academy Award for Best Original Screenplay",
          "Palme d'Or"
        ],
        "cast": [
          {
            "name": "John Travolta",
            "role": "Vincent Vega"
          },
          {
            "name": "Uma Thurman",
            "role": "Mia Wallace"
          },
          {
            "name": "Samuel L. Jackson",
            "role": "Jules Winnfield"
          },
          {
            "name": "Bruce Willis",
            "role": "Butch Coolidge"
          }
        ],
        "reviews": [
          {
            "critic": "Kenneth Turan",
            "publication": "Los Angeles Times",
            "score": 5.0,
            "comment": "Pulp Fiction is a thrilling ride from start to finish."
          },
          {
            "critic": "Owen Gleiberman",
            "publication": "Entertainment Weekly",
            "score": 4.5,
            "comment": "A movie with a unique style and unforgettable characters."
          }
        ]
      }
    ]
  }

data.movies.forEach((x) => {
console.log(x.title);
console.log(x.year);
console.log(x.director);
console.log(x.genre);
console.log(x.rating);
console.log(x.duration);
console.log(x.synopsis);
console.log(x.budget);
console.log(x.box_office);
x.awards.forEach((y) => {console.log(y)});
x.cast.forEach((y) => {console.log(y.name + " " + y.role)});
x.reviews.forEach((y) => {console.log(y.critic + " " + y.publication + " " + y.score + " " + y.comment)});
console.log("----------------------------------------------------");
})

data.movies.map((movie) => {    
    console.log(movie);
})