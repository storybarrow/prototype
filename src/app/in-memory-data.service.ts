import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService { 
  createDb() {
    let items = [ {"id":0,"name":"Green Vase","caption":"A celadon ceramic from Japan, 1855","description":"Grandma Clara purchased this vase on a trip to Japan. She traveled to Kobe to visit her aunt, uncle, and cousins. She told Mom that she purchased the vase from an antique dealer in Kobe.","tags":["Japan","Clara","Antique"],"imageUrls":["GreenVase.jpg"]},
                  {"id":1,"name":"Tragedy Mask","caption":"Wooden Mask from Japan - Item 1/2 of a set","description":"The face of tragedy, which is part of a two-piece set of Japanese wooden masks. Dark wood, with ivory teeth. Given to me by my parents. \n\nA Mask Memory: I remember the time that Mom lit the mask with a flashlight for Halloween. She set it up on a table in a dark room, just waiting for us to return after trick or treating. I think I was twelve years old and you were nine. We had a giant bag filled with candy. When we opened the door, the light switch didn’t work, which seemed really odd. \n\nI stepped into the room and you hung behind me. We were both a little creeped \tout. Then I saw the mask sitting on the table, uplit and really scary looking. \n\nI screamed and you did, too. Then Mom turned on the light and jumped out. She was wearing a purple wig and makeup – she looked like Elvira – mistress of the dark!","tags":["Japan","ERH Mom and Dad","Keep"],"imageUrls":["TragedyMask.jpg"]},
                  {"id":2,"name":"Comedy mask","caption":"Wooden Mask from Japan - Item 2/2 from a set","description":"The face of tragedy, which is part of a two-piece set of Japanese wooden masks. Dark wood, with ivory teeth. Given to me by my parents.\n","tags":["Japan","ERH Mom and Dad","Keep"],"imageUrls":[]},
                  {"id":3,"name":"Harpsichord","caption":"Flemish single built from a Zuckermann kit","description":"A Zuckermann Flemish single kit harpsichord built by ERH's Dad to celebrate her graduation from college (in 1978)! The kit was largely completed when the instrument travelled from Los Angeles to Boston in 1989. The harpsichord builder Dale Munschy built the voicing and completed the instrument in 2015. ","tags":["Alan R Hoffer","musical instrument","keep"],"imageUrls":["Harpsichord.jpg"]}
                ]; 
    let stories = [ {"id":0,"name":"Clara and Richard Nishimoto History","caption":"Two first-generation citizens start a family in Hawaii during turbulent times.","description":"Richard Nishimoto and Clara Kuraoka met in Honolulu.They were introduced by a mutual friend and married in 1934.They had three children, Shirley Ann in 1935, Jean in 1940, and Warren in 1942.They lived at 2819 Keama Place in the Manoa Valley for 50 years.","item_ids":[0]}
                  ]; 
    return { items, stories }; 
  } 
}