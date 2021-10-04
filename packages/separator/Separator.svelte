<script>
  import { Svg } from "@johnkegd/common";
  export let wrapper = true;
  export let wrapperStyles =
    "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20";
  export let wrapperInLine = "transform: translateZ(0)";
  export let svgStyles = "absolute bottom-0 overflow-hidden";
  export let svgViewBox = "0 0 2560 100";
  export let svgX = "0";
  export let svgY = "0";
  export let polygonStyles = "text-white fill-current";
  export let polygonPoints = "2560 0 2560 100 0 100";

  const svgSettings = {
    svgStyles,
    svgViewBox,
    svgX,
    svgY,
  };
</script>

{#if wrapper === true}
  <div class={wrapperStyles} style="{wrapperInLine};">
    <Svg {...svgSettings}>
      <polygon class={polygonStyles} points={polygonPoints} />
    </Svg>
  </div>
{:else}
  <Svg {...svgSettings}>
    <polygon class={polygonStyles} points={polygonPoints} />
  </Svg>
{/if}
