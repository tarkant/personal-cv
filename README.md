# Personal CV with commits tree!

Show off your curriculum with a visually attractive commits tree ✨ .

Checkout the [demo](https://tarekjellali.com/) here.

## Features 🧩

- A simple build process based on [webpack-typescript-sass-boilerplate](https://github.com/tarkant/webpack-typescript-sass-boilerplate)
- SEO-friendly/Social-friendly tags and attributes already setup
- Auto dark mode following the user's preferences
- Google Analytics and CloudFlare analytics ready
- A commit tree based on `<ul>` and `<li>`
- No dependency, everything is vanilla
- TypeScript and SCSS/SASS
- A clean print template
- Mobile-first layout

## How to use it 🤔

Clone this repository, run an `npm install` to install all the dev dependencies needed (webpack, TypeScript, SCSS/SASS loader).

Next to run the project simply `npm start`, the app will run on `http://localhost:8080/`, if you need to change the dev server port, add `--port 8888` to the `start` entry under `package.json` :

```json
{
  "name": "your-personal-cv",
  "version": "1.1.0",
  "description": "Your personal CV description.",
  "scripts": {
  "start": "webpack serve --progress --mode development --port 8888",
  ...
}
```

Replace the `package.json` file with the relevant info about you.

Next head to the `index.html` file and replace/add your personal info and achievements. For each entry in the commit tree just add for example:

```html
<li class="commit" data-date="2004-08-01">
    <span class="title">Added TCP/IP abilities:</span>
    <span class="desc">Discovered the Internet</span>
    <span class="date">Around August 2004</span>
</li>
```

Please pay close attention to `data-date` attribute to keep accurate dates for better SEO. The rest are straightforward.

Branches are nested `<ul>` in `<ul>` as follows:

```html
<!-- Jasmine Spring branch -->
<ul class="branch jasminespring-branch" data-label="jasminespring">
    <li class="commit merge" data-branch="master" data-date="2011-09-01"></li>
    <li class="commit" data-date="2011-04-01">
        <span class="title">Preparatory class:</span>
        <span class="desc">Technical cursus - Aborded.</span>
        <span class="date">April 2011</span>
    </li>
    <li class="commit new-branch" data-branch="master" data-date="2010-06-15"> </li>
</ul>
```

Notice the commit sandwiched between a `class="commit merge"` and `class="commit new-branch"` that represent the branching of your commits. You can omit the `class="commit merge"` to leave a branch open for example.

⚠ Last but not least, **don't forget to edit `src/assets/data.json` with your own personal data** !
## Analytics 📊

I've added Google Analytics v4 as well as CloudFlare Analytics to the `index.html` template as follows:

```html
</footer>
  <%if (cfAnalytics) { %>
    <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "<%= cfAnalytics %>"}'></script><!-- End Cloudflare Web Analytics -->
  <% } %>
  <%if (gAnalytics) { %>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=<%= gAnalytics %>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '<%= gAnalytics %>');
  </script>
  <% } %>
</body>
```

For both you can notice it's surrounded in a if block, the scrips will be injected only if you supply environnement variables as follows:

`CF_ANALYTICS=YOUR_CF_ANALYTICS_ID`

`GA_ANALYTICS=YOUR_GA_V4_ID`

## Other tools 🛠

You'll notice there is ESLint already setup, you can run `npm run lint` to lint the full project.

## Contribution/Issues ✋

Feel free to fork and PR to the project (as long as your PR is clear of course). If you notice an issue or anything of the sorts, please let me know, I'll be happy to fix/help!

## How does the commit tree work? 🎋

If you inspect the code, you'll just see ul elements containing li elements and other nested ul elements. That's it! Everything is static and is based on uls. Awesome isn't it?

----
## Changelog ⌚

* 20-Feb-2022: nom audit fix + upgraded webpack Dev server config
* 11-April-2021: Added Google Analytics and CloudFlare analytics integration
* 17-March-2021: Added webpack config and build process
* 13-March-2021: Added CapRover config files for easier deployment
* 15-July-2020 : Updated bio and cursus
* 05-May-2019 : Stripped analytics code and updated some stuff
* 28-Aug-2017 : Created everything, and visually fixed everything for Google Chrome and Firefox.
* Soon : Changing the markup and adding explanations of how to use the commit tree.
