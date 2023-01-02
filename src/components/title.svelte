<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;
  export let subtitle = "";
  let titleArray = title.split("");
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
  });
</script>

<div class={hasMoved ? "reset-position" : ""}>
  <h1 id="title">
    {#each titleArray as caracter, i}<span
        style="animation-delay: {i * 0.2}s; color: rgb(19, {100 + i * 5}, 209)"
        >{#if caracter === " "}
          &nbsp;
        {:else}
          {caracter}
        {/if}</span
      >{/each}
  </h1>
  <h2 style="animation-delay: {titleArray.length - 9.7}s;">
    {subtitle}
  </h2>
</div>

<style>
  h1 span {
    opacity: 0;
    transform: translateY(-250px);
    animation: slide-from-top 1.5s ease 1s 1 normal forwards;
  }
  h1 {
    display: flex;
    text-align: left;
    font-size: 4em;
    justify-content: center;
    margin: 0;
  }
  h2 {
    animation: slide-from-left 1s linear 1s 1 normal forwards;
    opacity: 0;
    transform: translateX(-50px);
    text-align: center;
    margin: 0;
  }
  div {
    transform: translateY(30vh) scale(2.5);
  }
  @keyframes slide-from-top {
    0% {
      color: black;
    }

    75% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slide-from-left {
    0% {
    }

    100% {
      opacity: 0.8;
      transform: translateX(0);
    }
  }
  @keyframes slide-from-bottom {
    0% {
    }

    100% {
      transform: translateX(0) scale(1);
    }
  }
  .reset-position {
    animation: slide-from-bottom 1s linear 0s 1 normal forwards;
  }
</style>
