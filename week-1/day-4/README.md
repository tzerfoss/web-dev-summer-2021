# Vets In Tech Web Development Course

## Week 1 Day 4

### Warm Up [10 minutes]

At this point, if you're reading this in your editor, you have successfully perform a git pull!

Be comfortable with this, as this will be a frequent practice.

1. All work will be done in `warm-up.html & warm-up.css`
2. Build the HTML template (Hint: Use the VS Code Emmet Abbreviation!)
3. Inside of the body, create 3 separate (not within one another) `div` with background-color in-line styling as followed:
   1. RGB of 160, 75, 49
   2. Hex Code of 27CCD2
   3. blue
4. If you update your browser, you shouldn't see anything! `div` is sized according to its content! So let's add a `h1` with the text `REDBLUEGREEN` to the first one, `h2` with the text `16 Base Hexadecimal` to the second and `h3` with the text `Common Name` for the third.
5. Inside of `warm-up.css`, using CSS, style `h1`, `h2`, and `h3` accordingly:
   1. lowercase
   2. right aligned
   3. font size of 58 pixels

Finished Early?

1. Add colors of your choice to each of the text!
2. Pull in a new font from google & apply it to `h1`

Having Trouble?

1. Did you use the `style` attribute within the opening tag for your in-line styles?
2. Did you `<link>` your CSS file to your `warm-up.html`?



### Learning Objectives

- Git Hub Pull
- Page Layout (Formatting a page/Putting it all together)
- Selectors (In-depth/Continued)
- Git Hub Push & Pull Request

### Concepts
   -color values
      - hex colors, color names, color picker
   - <span> element
   - CSS Box model
   - margin, padding, border
   - shorthand properties?
   - background, font, display
   - color, opacity, width/height, text-align
   - comments
   - lorem ipsum

## The Cascade in Cascading Style Sheets
   Cascade: "The process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element" -Jonas Schmedtmann, Web Developer, Designer, and Teacher

### IMPORTANCE > SPECIFICITY > SOURCE ORDER

## ONLY USE !important FOR DEBUGGING

(see cascade diagram for specificity & source order)

### Cascade & Specificity
   -CSS declarations marked with !important have the highest priority
   -Inline styles have priority over external stylesheets
   -A selector that contains 1 ID is more specific than one with 1000 classes
   -A selector that contains 1 class is more specific than one with 1000 elements
   -The universal selector * has no specificity value (0, 0, 0, 0)
   -Rely more on specificity than order of selectors
   -Rely on order when using 3rd party stylesheets-  put yours last in the html head or your styles will be over-written by the 3rd party's


#### References

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks

https://www.w3schools.com/cssref/func_rgb.asp

https://www.w3schools.com/colors/colors_hexadecimal.asp

https://www.w3schools.com/colors/colors_names.asp

https://www.w3schools.com/cssref/pr_text_text-transform.asp

https://www.w3schools.com/css/css_align.asp

https://www.w3schools.com/cssref/pr_font_font-size.asp


### Retrospective

### Assignment

You are going to do all of your work in `assignment.html & assignment.css`

Take a look at the brochure image file in this directory!

You are going to recreate the image by using everything we learned this week.

This does not need to be pixel perfect! We are leaving it up to your creativity.

We are looking the use of :

- the formatting of context/text using CSS
- the page layout
- borders!

Bonus: Add a music player!

To receive credit for this assignment, please submit a pull request **NO LATER THAN MONDAY 12:00 PM PST**
