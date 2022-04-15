<script>
import Current from "../components/Current.svelte";
import Previous from "../components/Previous.svelte";
import Output from "../components/Output.svelte";
import Span from "../components/Span.svelte";
import Button from "../components/Button.svelte";
import Grid from "../components/Grid.svelte";

</script>
<svelte:head>
  <title>Calculator</title>
</svelte:head>


<div>
<Grid>
  <Output>
    <Previous>5</Previous>
    <Current>6</Current>
  </Output>
  <Span>AC</Span>
  <Button>DEL</Button>
  <Button>÷</Button>
  <Button>7</Button>
  <Button>8</Button>
  <Button>9</Button>
  <Button>*</Button>
  <Button>4</Button>
  <Button>5</Button>
  <Button>6</Button>
  <Button>+</Button>
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
  <Button>-</Button>
  <Button>.</Button>
  <Button>0</Button>
  <Span>=</Span>
</Grid>
</div>

<style lang="postcss">
  div {
    @apply  
  h-screen
  w-full
  flex
  justify-center
  items-center

  }
</style>