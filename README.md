# AnotherSlider.js

##Another Slider, lightweight and easy to use

See the demo at http://jr-ruiz.github.io/

This jQuery plugin allows to implement an easy to use slider. Four steps are needed to include it into your project:

**First**: Add the following markup

```html
<div id="slider">
  <ul>
    <li>
        <img src="image01" alt="Your first image"/>
    </li>
    
    <li>
      <img src="image02" alt="Your second image"/>
    </li>
    
    ...
    
    <li>
       <img src="image-nth" alt="Your nth image"/>
    </li>
  </ul>
</div>

<div class="controls">
  <span id="left">&lt;</span>
  <span id="right">&gt;</span>
</div>
```

**Second**: link the aSlider.css stylesheet

```html
  <link rel="stylesheet" type="text/css" href="aSlider.min.css">
```

**Third**: do not forget to add jQuery (1.5+) in the way that you prefer. For instance:

```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```

**Fourth**: add the AnotherSlider file at the bottom of the body:

```html
  <script src="js/aSlider.min.js"></script>`
```

**Fifth**: call the function

```javascript
  $("#slider").slider();
```
