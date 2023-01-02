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
  <div class="main">
    <div class="event">
      <h3>Oui</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eget lacus fringilla, aliquam libero non, efficitur dolor. Morbi
        ultrices mauris vitae leo ullamcorper sodales. Curabitur ut venenatis
        ex, elementum pulvinar ligula. Praesent vehicula ipsum vitae gravida
        interdum. Donec ut urna augue. Duis rhoncus augue in quam aliquam, vitae
        molestie metus pulvinar. In nec volutpat nisl, id venenatis enim.
        Praesent vitae lorem nec nulla iaculis commodo. Nulla semper neque et
        enim pulvinar, id congue urna pellentesque. Sed eros lacus, fermentum
        non dictum ut, tincidunt quis ex. Sed convallis mi vitae leo accumsan
        pellentesque. Ut ex nulla, maximus eu dictum nec, pharetra eget dui.
        Nullam maximus efficitur diam, non scelerisque diam placerat vel.
        Aliquam erat volutpat. Praesent ac ligula laoreet, interdum risus ut,
        ultricies orci. Fusce nisl tortor, sagittis ac augue vitae, dapibus
        eleifend magna.
      </p>
    </div>
    <div class="event">
      <h3>Oui</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eget lacus fringilla, aliquam libero non, efficitur dolor. Morbi
        ultrices mauris vitae leo ullamcorper sodales. Curabitur ut venenatis
        ex, elementum pulvinar ligula. Praesent vehicula ipsum vitae gravida
        interdum. Donec ut urna augue. Duis rhoncus augue in quam aliquam, vitae
        molestie metus pulvinar. In nec volutpat nisl, id venenatis enim.
        Praesent vitae lorem nec nulla iaculis commodo. Nulla semper neque et
        enim pulvinar, id congue urna pellentesque. Sed eros lacus, fermentum
        non dictum ut, tincidunt quis ex. Sed convallis mi vitae leo accumsan
        pellentesque. Ut ex nulla, maximus eu dictum nec, pharetra eget dui.
        Nullam maximus efficitur diam, non scelerisque diam placerat vel.
        Aliquam erat volutpat. Praesent ac ligula laoreet, interdum risus ut,
        ultricies orci. Fusce nisl tortor, sagittis ac augue vitae, dapibus
        eleifend magna.
      </p>
    </div>
  </div>
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
    padding: 0 200px;
    width: 100%;
    margin: 0 200px;
  }
  .main::after {
    content: "";
    position: absolute;
    width: 1px;
    background-color: white;
    top: 8em;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  h2 {
    font-size: 2.8em;
    background: linear-gradient(
      90deg,
      rgba(19, 100, 209, 1) 0%,
      rgba(19, 160, 209, 1) 35%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
  }
  .anim {
    animation: slide-from-bottom 2s ease-in 0s 1 normal both;
  }
  .event {
    background-color: gray;
    border-radius: 12px;
    padding: 0 15px;
  }
  .event h3 {
    color: rgba(19, 190, 209, 1);
  }
  .event:nth-child(odd) {
    float: left;
    margin-right: 53%;
  }
  .event:nth-child(even) {
    float: right;
    margin-left: 53%;
  }
</style>
