<script lang="ts">
  import { onMount } from "svelte";
  import { isTimelineVisible } from "../store";

  let hasMoved = false;
  const animate = () => {
    if (document.documentElement.scrollTop >= 70) {
      hasMoved = true;
      window.removeEventListener("scroll", animate);
    }
  };
  onMount(() => {
    if (!hasMoved) {
      window.addEventListener("scroll", animate);
    }
    const div = document.querySelector("#about") as Element;
    const addAnimation = (entries: IntersectionObserverEntry[]) => {
      if (!$isTimelineVisible)
        for (const entry of entries) {
          if (entry.intersectionRatio <= 0.3) {
            isTimelineVisible.set(true);
            observer.unobserve(div);
          }
        }
    };
    const observer = new IntersectionObserver(addAnimation, {
      threshold: 0.3,
    });
    observer.observe(div);
  });
</script>

<div class="main {hasMoved ? 'show' : ''}">
  <h2 class="title-gradient">A propos de moi.</h2>
  <div class="img-quote">
    <div class="img-placeholder" />
    <p>
      <span class="quote">
        "Any application that can be written in JavaScript, will eventually be
        written in JavaScript."</span
      >Jeff Atwood 2007
    </p>
  </div>
  <p class="main-text">
    Bonjour ! Je m'appelle Kévin Moreau, j'ai 20 ans et j'habite actuellement à
    Pau. Mon interêt pour l'informatique s'est manifesté depuis l'enfance a
    jouer et réparer le PC familial. C'est depuis la 3ème, lors d'un
    enseignement d'exploration que je decide de m'orienter vers "Création et
    Innovation Technologiques", que je découvre l'univers du web avec <span
      class="techno">HTML</span
    >
    et
    <span class="techno">CSS</span>. Même si c'était tout simple j'ai vraiment
    aimé l'aspect "voir ce qu'il se passe de l'autre coté" de tout les grand
    sites que nous visitons. Force de ma curiosité et après un BAC scientifique
    je décide de me lancer en tant qu'alternant développeur informatique au
    <a href="https://www.cesi.fr" target="blank" class="link">CESI</a>
    de Pau. Je fini par etre alternant DevOps à
    <a href="https://www.inetum.com/fr" target="blank" class="link">Inetum</a>
    en mars 2021, sois 5 mois après le début de mon alternance (octobre 2020) pour
    cause de difficulté a trouver une entreprise du au COVID. D'octobre a mars j'avais
    donc beaucoup de temps libre et je décide d'apprendre de nouvel technologie web
    ! J'ai donc appris
    <span class="techno">JQuery</span>,
    <span class="techno">PHP</span>
    et linux pour le développement web. Par la suite j'ai pu notamment découvrir
    <span class="techno">Javascript</span>,
    <span class="techno">Typescript</span>,
    <span class="techno">AstroJs</span> et <span class="techno">SvelteKit</span>
    (et bien d'autre !) qui m'ont aidé a faire ce site.
  </p>
  <p class="currently">
    Actuellement j'aimerais faire du freelance a mes heures perdus.
  </p>
</div>

<style>
  .techno {
    color: var(--first-accent);
  }
  .link {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    text-decoration-color: var(--first-accent);
  }
  .img-quote p {
    text-align: center;
    font-size: 0.9em;
  }
  .main-text,
  .currently {
    font-size: 1.3em;
  }
  .main {
    visibility: hidden;
    opacity: 0;
    transform: translateY(15px);
    padding: 0 200px;
  }
  .quote {
    font-style: italic;
    display: block;
  }
  .img-quote {
    float: right;
    width: 200px;
    margin: 0 10px;
    transform: translateY(-60px);
  }
  .img-placeholder {
    aspect-ratio: 1/1;
    width: inherit;
    background-color: white;
    border-radius: 50%;
  }
  @keyframes slide-from-bottom {
    0% {
      visibility: visible;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
      visibility: visible;
    }
  }
  .show {
    animation: slide-from-bottom 0.5s linear 0.5s 1 normal both;
  }
</style>
