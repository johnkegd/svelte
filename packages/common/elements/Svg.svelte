<script>
  import { get_current_component } from "svelte/internal";
  import { forwardEventsBuilder, useActions } from "../internal/index.js";

  export let svgStyles = "absolute bottom-0 overflow-hidden";
  export let svgViewBox = "0 0 2560 100";
  export let svgX = "0";
  export let svgY = "0";

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let element = null;
  export function getElement() {
    return element;
  }
</script>

<svg
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...$$restProps}
  class={svgStyles}
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  version="1.1"
  viewBox={svgViewBox}
  x={svgX}
  y={svgY}
>
  <slot />
</svg>
