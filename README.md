# JavaScript-Mandelbrot-Set
## A program using JavaScript to render the Mandelbrot Set.

This is a quick program I made to render the Mandelbrot Set using only JavaScript and HTML.

It uses the escape time algorithm to calculate the "tendency" of a point being part of the Mandelbrot Set or it's "distance" to it, however you want to interpret it. It then converts this "distance"(measured in number of iterations of Zn) into rgb color values. You can tweak and play around with the colors on the `renderSet()` function.

Finally, I render the pixels on the HTML canvas using the `putImageData()` method. You can also tweak the size of this canvas, but I still have to compensate for distortion. I plan on adding inputs to change this kind of options, as well as zooming into a specific point.

![js-mandelbrot](https://user-images.githubusercontent.com/64794244/112767171-8700df80-8feb-11eb-931a-ad44147d4ce6.png)
*Screenshot of the generated image for 100 maximum iterations and a blueish color conversion.*

![canvas](https://user-images.githubusercontent.com/64794244/112769510-cfbe9580-8ff7-11eb-896e-0a61d68d8d9a.png)
*Green neon conversion. For this effect I established 3 color conversion steps, or in other words, a very rudimentary color gradient. 50 maximum iterations.*

**Fun fact:** As it is rendered inside a canvas tag, you can simply right-click and download the image for outside use!

For reference you can check:

- https://en.wikipedia.org/wiki/Mandelbrot_set
- https://en.wikipedia.org/wiki/Plotting_algorithms_for_the_Mandelbrot_set
