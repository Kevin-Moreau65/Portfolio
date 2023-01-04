<script lang="ts">
  import { isTimelineVisible } from "../store";
  import { events, tags } from "../content/timeline.json";
  const parseText = (text: string) => {
    let odd = false;
    for (const tag of tags) {
      text =
        (text.includes(tag.name) && parse(text, tag.name, tag.style)) || text;
    }
    return text;
  };
  const parse = (text: string, tag: string, style: string) => {
    let odd = false;
    const parsedLocation = text.split(tag);
    const mutatedLocation = parsedLocation.map((text) => {
      if (odd) {
        text = `<span style="${style}"> ${text} </span>`;
      }
      odd = !odd;
      return text;
    });
    return mutatedLocation.join("");
  };
</script>

<div
  id="timeline"
  class={$isTimelineVisible ? "anim" : ""}
  style="visibility: {$isTimelineVisible ? 'visible' : 'collapse'};"
>
  <h2 class="title-gradient">Mon parcours</h2>
  <div class="main">
    {#each events as event}
      <div class="event">
        <h3 class="title-event">
          <span>{event.title}</span><span>{event.date}</span>
        </h3>
        <p class="description">
          {@html parseText(event.description)}
        </p>
      </div>
    {/each}
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
    height: auto;
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
  .anim {
    animation: slide-from-bottom 2s ease-in 0s 1 normal both;
  }
  .event {
    background-color: rgba(128, 128, 128, 0.159);
    border-radius: 12px;
    padding: 0 15px;
  }
  .event h3 span {
    background: var(--accent-gradient-100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .event:nth-child(odd) {
    float: left;
    margin-right: 53%;
  }
  .event:nth-child(even) {
    float: right;
    margin-left: 53%;
  }
  .title-event {
    display: flex;
    justify-content: space-between;
  }
  .title-event span {
    text-align: center;
  }
</style>
