# JavaScript-Mandelbrot-Set
## A program using JavaScript to render the Mandelbrot Set.

This is a quick program I made to render the Mandelbrot Set using only JavaScript and HTML.

It uses the escape time algorithm to calculate the "tendency" of a point being part of the Mandelbrot Set or it's "distance" to it, however you want to interpret it. It then converts this "distance"(measured in number of iterations of Zn) into rgb color values. You can tweak and play around with the colors on the `renderSet()` function.

Finally, I render the pixels on the HTML canvas using the `putImageData()` method. You can also tweak the size of this canvas, but I still have to compensate for distortion. I plan on adding inputs to change this kind of options, as well as zooming into a specific point.

For reference you can check:

- https://en.wikipedia.org/wiki/Mandelbrot_set
- https://en.wikipedia.org/wiki/Plotting_algorithms_for_the_Mandelbrot_set
