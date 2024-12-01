# Lesson Plan: Introduction to Bootstrap with Rock Paper Scissors Game

## Objective

By the end of this lesson, students will understand how to integrate Bootstrap into a project and apply basic Bootstrap styles to improve the appearance of a simple web application.

---

## Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Completed the Rock Paper Scissors game project or have the provided solution code
- Access to the [Bootstrap documentation](https://getbootstrap.com)

---

## Lesson Outline

In this lesson we will be adding the following features:

- Style the reset button
- Add a nav bar
- Add a How to Play page for instructions
- Add "weapons" cards to the How to Play page
- Add a carousel to the How to Play page

---

### 1. **What is Bootstrap?**

Bootstrap is like a popular front-end framework (think _toolbox_) for building websites. It gives you a collection of _ready-to-use building blocks_ for creating a website that looks good and works well on all devices, like phones, tablets, and computers.

For example:

- Instead of writing all the CSS for buttons or layouts yourself, Bootstrap gives you pre-designed styles and layouts you can just add to your HTML.
- It also helps you make your website _responsive_, meaning it adjusts automatically to different screen sizes.

You simply include Bootstrap in your project, use its class names in your HTML, and your site gets styled without you writing lots of custom CSS. It saves time and makes things look professional right away!

---

### 2. **Setting Up Bootstrap**

1. **Include Bootstrap in Your Project**

   - Go to the [Bootstrap Documentation](https://getbootstrap.com) and copy the CDN links for CSS and JS.
   - Add them to the `<head>` section of your HTML file _above_ your existing `<link>` and `<script>` tags:

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   <script
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
     defer
   ></script>
   ```

Notice how the font and button style immediately change, just by including the bootstrap library!

### 3. **Styling the Reset Button**

- Add the `btn` class to the Reset Game button.
- Next, add the `btn-primary` class to the Rest Game button also.

```html
<button id="resetButton" class="btn btn-primary">Reset Game</button>
```

You should see that your button is instantly transformed into a well-styled button, _with_ hover effect, and you didn't even write any css!

Try changing the class `btn-primary` to `btn-danger` and see how your button changes.

Check out the Bootsrap Docs [section on Buttons](https://getbootstrap.com/docs/5.0/components/buttons/) for more button styling options.

### 4. **Add a Navbar**

Before we can add a [Bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/), we'll need to modify our code so that we're not using flexbox on the _entire_ html/body.

1. Create a div with a class of `container` to hold our elements.
2. Move _everything_ that exists in the body inside of the container div.
3. In style.css, change this CSS Rule so that it is no longer targeting `html, body`, rather it should target our new `.container` class. We'll also add a min-width to help with centering.
4. We also need to differentiate our "weapon" buttons from other buttons in our css, so update the button rule to only target buttons within the main tags.

```css
/* OLD CSS RULE */
/* html, body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */

/* NEW CSS RULE */
.container {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
}

main > button {
  margin: 10px;
  font-size: 40px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

Now let's add our Navbar! Above the header, paste in this code snippet:

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Rock Paper Scissors</a>
  </div>
</nav>
```

Try chaning your navbar from light colored to dark colored by changing these classes: `navbar-light bg-light` on the `nav` tag to these classes: `navbar-dark bg-dark`

You can replace the text within the `.navbar-brand` with an `<img>`.

```html
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img src="https://img.icons8.com/?size=100&id=IVV7nZylnh5r&format=png&color=0d6efd" width="auto" height="24"></a>
      </div>
    </nav>
```

Or you can add these classes `d-inline-block align-text-top` to your image, and then add the text back for both options.

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"
      ><img
        src="https://img.icons8.com/?size=100&id=IVV7nZylnh5r&format=png&color=0d6efd"
        width="auto"
        height="24"
        class="d-inline-block align-text-top"
      />
      Rock Paper Scissors</a
    >
  </div>
</nav>
```

Add a link to our instruction page - "How to Play" - right after our Rock Paper Scissors logo text (we don't have an instruction page yet, so the href should simply say `"#"`). Be sure to give that link a class of `nav-link` so that Bootstrap formats it to match our Navbar.

```html
<a class="nav-link" href="#">How to Play</a>
```

### 5. **Add a page for instructions**

Let's create new html page called `howtoplay.html`. Add the HTML boilerplate to this page and update the `title` element.

Be sure to link to Bootstrap's CDN, as well as our CSS and JS files in the head of this new HTML file.

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
  defer
></script>
<link rel="stylesheet" href="css/style.css" />
<script defer src="js/app.js"></script>
```

Update the Navbar so that How to Play links to `howtoplay.html`. Then copy the Navbar and paste it into `howtoplay.html`.

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"
      ><img
        src="https://img.icons8.com/?size=100&id=IVV7nZylnh5r&format=png&color=0d6efd"
        width="auto"
        height="24"
        class="d-inline-block align-text-top"
      />
      Rock Paper Scissors</a
    >
    <a class="nav-link" href="howtoplay.html">How to Play</a>
  </div>
</nav>
```

Next move the instructions `div` out of `index.html` and into the body of `howtoplay.html`. Give this div a class of `container` as well.

Final `howtoplay.html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=https://en.wikipedia.org/wiki/Rock_paper_scissors#History, initial-scale=1.0"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      defer
    ></script>
    <link rel="stylesheet" href="css/style.css" />
    <script defer src="js/app.js"></script>
    <title>Rock, Paper, Scissors</title>
  </head>
  <body>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"
          ><img
            src="https://img.icons8.com/?size=100&id=IVV7nZylnh5r&format=png&color=0d6efd"
            width="auto"
            height="24"
            class="d-inline-block align-text-top"
          />
          Rock Paper Scissors</a
        >
        <a class="nav-link" href="howtoplay.html">How to Play</a>
      </div>
    </nav>
    <div class="container">
      <h3>How to Play Rock, Paper, Scissors</h3>
      Click Rock, Paper, or Scissors to make your choice. The computer will make
      its choice immediately after. The result will display on the screen:
      <ul>
        <li>Rock beats Scissors</li>
        <li>Scissors beats Paper</li>
        <li>Paper beats Rock</li>
      </ul>
      If both choices are the same, it’s a tie!
      <br />
      <p>
        Goal: Win as many rounds as you can by picking the option that beats the
        computer's choice!
      </p>
    </div>
  </body>
</html>
```

### 6. **Add "weapons" cards to the How to Play page**

We'll make our cards in the `howtoplay.html` page. In our container div, under the final `<p>` tag, lets make our first card.

```html
<div class="card">
  <div class="card-body">Rock beats Scissors</div>
</div>
```

Let's give our card a title and some text.

```html
<div class="card-body">
  <h5 class="card-title">Rock</h5>
  <p>
    A player who decides to play rock will beat another player who chooses
    scissors ("rock crushes scissors" or "breaks scissors" or sometimes "blunts
    scissors"[1]), but will lose to one who has played paper ("paper covers
    rock").
  </p>
</div>
```

Next we'll give our card an image, which is common with cards.

```html
<div class="card">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/1920px-Rock-paper-scissors_%28rock%29.png"
    class="card-img-top"
  />
  <div class="card-body">
    <h5 class="card-title">Rock</h5>
    <p>
      A player who decides to play rock will beat another player who chooses
      scissors ("rock crushes scissors" or "breaks scissors" or sometimes
      "blunts scissors"[1]), but will lose to one who has played paper ("paper
      covers rock").
    </p>
  </div>
</div>
```

Whoah that image is really big! Lets add a CSS rule for our cards to make them a bit more manageable.

```css
.card {
  width: 18rem;
}
```

Let's make two more cards for our other weapons. Let's also wrap a `div` around them for organization, and give that div a class of `card-container`. 

```html
<div class="card-container">
  <div class="card">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/1920px-Rock-paper-scissors_%28rock%29.png"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">Rock</h5>
      <p>
        A player who decides to play rock will beat another player who chooses
        scissors ("rock crushes scissors" or "breaks scissors" or sometimes
        "blunts scissors"[1]), but will lose to one who has played paper ("paper
        covers rock").
      </p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1920px-Rock-paper-scissors_%28paper%29.png"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">Paper</h5>
      <p>
        A play of paper will lose to a play of scissors ("scissors cuts paper"),
        but will beat another player who chooses rock ("paper covers rock").
      </p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1920px-Rock-paper-scissors_%28scissors%29.png"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">Scissors</h5>
      <p>
        A player who decides to play scissors will beat another player who
        chooses paper ("scissors cuts paper"), but will lose to another player
        who chooses rock ("rock crushes scissors").
      </p>
    </div>
  </div>
</div>
```

Then we need to turn that `.card-container` into a flexbox.
```css
.card-container {
    display: flex;
}
```

Looks good!  Finally, let's give our cards a little margin by adding the class `mx-2` to each `card` div.

### 7. **Add a carousel to the How to Play page**

Photo by Pavel Danilyuk from Pexels: https://www.pexels.com/photo/group-of-people-playing-a-jenga-game-8111309/
Photo by cottonbro studio from Pexels: https://www.pexels.com/photo/friends-playing-together-10506091/
Photo by Thirdman from Pexels: https://www.pexels.com/photo/children-in-school-uniform-playing-rock-paper-scissors-8926558/

We'll add bootstrap's basic carousel code snippet to our howtoplay.html between our nav and our container.  The code snippet already has image tags that have been updated with our chosen images.

```html
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="https://images.pexels.com/photos/8111309/pexels-photo-8111309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        class="d-block h-50"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.pexels.com/photos/10506091/pexels-photo-10506091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        class="d-block h-50"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.pexels.com/photos/8926558/pexels-photo-8926558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        class="d-block h-50"
      />
    </div>
  </div>
</div>
```

After adding that our images are way too big, so let's make some modifications in our css.  We'll target the `.carousel-inner` class and specify a max-height of 80vh.  Next we'll need to make sure the images cannot be wider than the container they're in.  Target the `#carousel img` elements and change the max-width to 100%.

