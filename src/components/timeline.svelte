<script lang="ts">
  import { onMount } from "svelte";
  let visible = false;
  onMount(() => {
    const div = document.querySelector("#timeline") as Element;
    const addAnimation = (entries: IntersectionObserverEntry[]) => {
      if (!visible)
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            observer.unobserve(div);
          }
        }
    };
    const observer = new IntersectionObserver(addAnimation, { threshold: 0.5 });
    observer.observe(div);
  });
</script>

<div id="timeline" class={visible ? "anim" : ""}>
  <h2>Mon parcours</h2>
</div>

<style>
  @keyframes slide-from-bottom {
    0% {
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  #timeline {
    opacity: 0;
    transform: translateY(15px);
    height: 500px;
  }
  .anim {
    animation: slide-from-bottom 2s ease-in 0s 1 normal both;
  }
</style>
