<svelte:head>
  <title>JB Stepan</title>
  <meta name="description" content="The site for all things JB Stepan">
</svelte:head>

<script lang="ts">
  import logo from "../images/logo.svg"
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<NavBar />
<main class="text-center mt-20 sm:m-2">

  <div class="flex justify-center items-center"><img class="" src={logo} width="375" alt=""></div>
  
  <div class="m-0 p-[15px] block">
    <h1 class="text-3xl font-bold p-4">Hi, I'm Jakob or JB Stepan</h1>
    <p class="text-lg p-4">A student and hobbiest programmer</p>
  </div>

  <a class="contact-link" style="text-decoration: none;" href="/contact">
    <button class="contactbtn">📩 Get in touch</button>
  </a>
  
  <Footer />
  
</main>

<style>
  p {
    font-size: large;
  }

  button {
    transition: 300ms;
    background-color: white;
    color: black;
    outline: transparent;
    border: transparent;
    cursor: pointer;
  }

  .contactbtn {
    transition: 300ms;
    transform: scale(1);
    background-color: white;
    color: black;
    padding: 1.5rem;
    outline: transparent;
    border: transparent;
    font-size: xx-large;
    cursor: pointer;
    text-decoration: none;
  }

  .contactbtn:hover {
    transition: 300ms;
    transform: scale(1.2);
    background-color: rgb(188, 188, 188);
    outline-color: white;
    outline: black;
    text-decoration: none;
  }

</style>
