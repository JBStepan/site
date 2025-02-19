<script>
  // @ts-ignore
  import X from "../images/x.svg"
  import Github from "../images/github.svg"
  import Bluesky from "../images/bluesky.svg"
</script>

<div class="flex flex-col justify-center items-center mt-8 left-0 right-0 w-[100%] text-[#808080]">
  <div>
    <a href="https://www.x.com/jbstepan">
      <img class="inline-block w-7 m-1" src={X} alt="">
    </a>
  
    <a href="https://www.github.com/jbstepan">
      <img class="inline-block w-7 m-1" src={Github} alt="">
    </a>
  
    <a href="https://bsky.app/profile/jbstepan.com">
      <img class="inline-block w-7 m-1" src={Bluesky} alt="">
    </a>
  </div>

  <div class="mt-1">
    <a class="underline" href="https://status.jbstepan.com">
      Status
    </a> | 
    <a class="underline" href="/pgp/jbstepan_public.asc">
      PGP Key
    </a>
  </div>

  <footer class="mt-3">
    © {new Date().getFullYear()} JB Stepan.
  </footer>
</div>

<style>
</style>