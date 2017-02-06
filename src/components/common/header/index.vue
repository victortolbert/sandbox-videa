<!-- https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/ -->
<template>
  <header>
      <div>
        <h1>
          <a href="/">Kilian Valkhof</a>
        </h1>
        <h2>Front-end &amp; user experience developer, Jedi.</h2>

        <form method="get" action="https://kilianvalkhof.com/">
    <fieldset>
      <label class="hidden" for="s">Search term</label>
      <input type="text" value="" name="s" id="s" placeholder="Search...">
      <button type="submit">Search</button>
    </fieldset>
  </form>

        <nav>
          <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="/projects/">Projects</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
</template>
<style>
  header {
    position: relative;
    height: 55vh;
    min-height: calc(140px + 6vw);
    width: 100%;
    overflow: hidden;
    background: #212220 url(static/img/bg2.jpg) fixed no-repeat top right;
    background-size: 100%;
    clip-path: url(static/img/shapes.svg#header);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
    font-family: 'HaboroSerif-NorBoo';
    font-weight: normal;
    text-shadow: 0 0 4px #212220
  }

  @media screen and (min-width:62.5rem) {
    header {
      background-size: auto
    }
  }

  header div {
    position: absolute;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    width: 80vw;
    padding-bottom: 1.5rem;
    margin: 0 10vw;
    bottom: calc(6vw + 2rem);
  }

  @media screen and (min-width:40rem) {
    header div {
      height: 40vh;
    }
  }

  @media screen and (max-width: 62.5rem) {
    @-moz-document url-prefix() {
      header div {
        bottom: calc(6vw + 4rem);
      }
    }
  }


  header h1 {
    margin: 0
  }

  header h1 a {
    font-family: "Asturias";
    display: inline-block;
    font-size: 6rem;
    line-height: 0.6;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 400;
    margin-top: 3rem
  }

  @media screen and (min-width:33.82rem) {
    header h1 a {
      margin-top: 9rem;
      line-height: 0.4
    }
  }

  @media screen and (min-width:40rem) {
    header h1 a {
      margin-top: 0;
      position: absolute;
      bottom: 2rem
    }
  }

  header h2 {
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 #212220, 1px 1px #212220, -1px 1px #212220, 1px -1px #212220, -1px -1px #212220;
    font-weight: 300;
    margin: -0.6rem 0 0
  }

  @media screen and (min-width:33.82rem) {
    header h2 {
      margin: 0
    }
  }


  @media screen and (min-width:40rem) {
    header h2 {
      line-height: 1;
      position: absolute;
      bottom: 0.3rem
    }
  }

  header form fieldset {
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0.3rem;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: right
  }

  @media screen and (min-width:35rem) {
    header form fieldset {
      width: 20vw
    }
  }

  header form fieldset label {
    display: none
  }

  header form fieldset input {
    cursor: pointer;
    text-align: left;
    border: 0;
    display: inline-block;
    background: url(static/img/search.svg) no-repeat 6px 2px;
    background-size: 20px;
    font-size: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'HaboroSerif-NorBoo';
    font-weight: normal;
    width: 0vw;
    -webkit-transition: 0.3s width ease;
    transition: 0.3s width ease;
    padding-left: 32px
  }

  header form fieldset input:focus {
    cursor: default;
    width: 100%;
    outline: none
  }

  @media screen and (min-width:35rem) {
    header form fieldset input:focus {
      cursor: default;
      width: 20vw;
      outline: none
    }
  }

  header form fieldset button {
    display: none
  }

  header nav {
    bottom: -2rem;
    right: 0;
    position: absolute;
    width: 100%;
    font-size: 1.125rem
  }

  header nav ul {
    width: 100%;
    padding: 0;
    list-style: none;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  header nav ul li a {
    padding: 0;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none
  }

  header nav ul li a:hover, header nav ul li a:focus {
    color: #CDF1C1
  }


</style>
