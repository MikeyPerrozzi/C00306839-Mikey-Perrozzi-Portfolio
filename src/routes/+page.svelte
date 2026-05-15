<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    import { asset } from '$app/paths';
    
    let showQuoteModal = false;

    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }
</script>


<svelte:head>
    <title>Mikeys Portfolio</title>
</svelte:head>


<!-- Page Container -->
<div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
        <h1>Welcome to Mikey Perrozzi's Portfolio Site!</h1>
        <p class="subheading">
        
        </p>
       
    </section>

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Featured Art Pieces</h2>
        <div class="FeaturedArt">
            
            <div>
                <img class="Image" src={asset("/images/Zooble Drawing.jpg")} alt="this is Zooble">
                <p class="Title">Zooble</p>

            </div>

             <div>
              <img class="Image" src={asset("/images/Spooky Guy.jpg")} alt="this is Spooky Guy">
                <p class="Title">Spooky Guy</p>
            </div>

             <div>
              <img class="Image" src={asset("/images/Steam Bot.jpg")} alt="this is Steam Bot">
                <p  class="Title">Steam Robot</p>
            </div>

             <div>
              <img class="Image" src={asset("/images/Enviroment Bot.jpg")} alt="this is Enviroment Bot">
                <p  class="Title">Environment Bot</p>
            </div>


        </div>
        
        <a class="browse-link" href="{resolve('/catalogue')}">Browse Art Catalouge →</a>
    </section>

    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Want to learn more about me?</h2>
        
        <a href="{resolve('/about')}" class="learn-more">Learn more →</a>
    </section>

    <!-- Quote Modal -->
    <Modal
        bind:isOpen={showQuoteModal}
        {...$currentQuote}
        onClose={() => (showQuoteModal = false)}
    />
</div>


<style>
    .home-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    /* Hero Section */
    .hero {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(122, 90, 64, 0.85);
         font-family:'papyrus';
    }

    .hero h1 {
        font-size: var(--font-xxl);
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
        font-family:'papyrus';
    }

    .subheading {
        font-size: var(--font-lg);
        font-family: var(--font-body);
        color: var(--text-secondary);
        margin-bottom: var(--space-md);
         font-family:'papyrus';
    }


    /* Featured Section */
    .featured {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        background-colour: #95cfff;
        background-size: 200px;
        background-repeat: repeat;
        background-color: rgba(122, 90, 64, 0.85);
       
    }

    .featured h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        font-family:'papyrus';
    }

    .FeaturedArt{

        display:grid; 
        grid-template-columns: repeat(4, 1fr);
       
        
    }

    .Title{
        text-align: center;
        font-family:'papyrus';
    }

   

	/* Ensure button styling doesn’t interfere */
	.card-button {
		all: unset; /* Remove default button styles */
		cursor: pointer;
		display: block;
		text-align: inherit;
	}

	.card-button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: var(--space-lg);
        margin-bottom: var(--space-md);
    }

    .browse-link {
        display: block;
        text-align: center;
        margin-top: var(--space-md);
        font-weight: 500;
        text-decoration: none;
        color: rgb(230, 255, 202);
    }

    /* About Teaser */
    .about-teaser {
        text-align: center;
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-background);
        border-top: var(--border-default);
        background: linear-gradient(to top, var(--color-surface), transparent);
        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(255, 255, 255, 0.75);
    }

    .about-teaser h2 {
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
    }

    .about-teaser p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 60ch;
        margin: 0 auto var(--space-sm) auto;
    }

    .learn-more {
        font-size: var(--font-sm);
        color: var(--color-accent);
        text-decoration: none;
    }

    .learn-more:hover {
        text-decoration: underline;
    }

    .Image{

        width: 350px;
        height: 440px;
        border: 3px solid #d8a77a;
    
    }



</style>
