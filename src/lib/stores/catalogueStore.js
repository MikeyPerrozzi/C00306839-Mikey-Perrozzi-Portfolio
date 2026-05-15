import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Dynamo",
        description: "The character Dynamo from the game Deadlock",
        category: "Deadlock",
       
        featured: false,
        image: "/images/catalogue/item-1.png"
    },
    {
        id: "2",
        title: "Celeste",
        description: "The character Celeste from the game Deadlock",
        category: "Deadlock",
        
        featured: false,
        image: "/images/catalogue/item-2.png"
    },
    {
        id: "3",
        title: "Allen",
        description: "The character Allen from the TV show Invincible",
        category: "Invincible",
        
        featured: true,
        image: "/images/catalogue/item-3.png"
    },
    {
        id: "4",
        title: "Omni Man",
        description: "The character Omni Man from the TV show Invincible",
        category: "Invincible",
       
        featured: true,
        image: "/images/catalogue/item-4.png"
    },
    {
        id: "5",
        title: "Caine",
        description: "Caine from the Amazing digital circus",
        category: "TADC",
        
        featured: true,
        image: "/images/catalogue/item-5.png"
    },
    {
        id: "6",
        title: "Golurk",
        description: "The Pokemon Golurk",
        category: "Pokemon",
    
        featured: false,
        image: "/images/catalogue/item-6.png"
    },
    {
        id: "7",
        title: "Phantom Freddy",
        description: "Phantom Freddy from Fnaf3",
        category: "Fnaf",
        
        featured: false,
        image: "/images/catalogue/item-7.png"
    },
    {
        id: "8",
        title: "Pit Rabbit",
        description: "The Pit Rabbit from Fnaf",
        category: "Fnaf",
      
        featured: false,
        image: "/images/catalogue/item-8.png"
    },
    {
        id: "9",
        title: "Battle Beast VS Thragg",
        description: "A redraw of a comic panel from the Invincible comics",
        category: "Invincible",
      
        featured: false,
        image: "/images/catalogue/item-9.png"
    },
    {
        id: "10",
        title: "Sinister Mark",
        description: "Sinister Mark from the TV show Invincible",
        category: "Invincible",
        
        featured: false,
        image: "/images/catalogue/item-10.png"
    },
    {
        id: "11",
        title: "Mortality",
        description: "Mortality from the Fnaf inspired series The Walten Files",
        category: "Fnaf",
        
        featured: false,
        image: "/images/catalogue/item-11.png"
    },
    {
        id: "12",
        title: "Conquest",
        description: "A redraw of a panel from the comic series Invincible",
        category: "Invincible",
       
        featured: false,
        image: "/images/catalogue/item-12.png"
    },
    {
        id: "13",
        title: "Tree Protector",
        description: "Original character",
        category: "OG Character",
        
        featured: false,
        image: "/images/catalogue/item-13.png"
    },
    {
        id: "14",
        title: "Maragma",
        description: "Original character",
        category: "OG Character",
       
        featured: false,
        image: "/images/catalogue/item-14.png"
    },
    {
        id: "15",
        title: "Treasure Dragon",
        description: "Original character",
        category: "OG Character",
       
        featured: false,
        image: "/images/catalogue/item-15.png"
    }
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
