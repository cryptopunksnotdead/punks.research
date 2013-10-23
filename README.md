# jquery.tabs.js

In-Page Tabs / Tabbed Panels

## Demos

* Demo 1 -> [demo/demo1.html](http://libsjs.github.io/jquery.tabs.js/demo/demo1.html)
* Demo 2 -> [demo/demo2.html](http://libsjs.github.io/jquery.tabs.js/demo/demo2.html)

## How to use

Include the `jquery.tabs.js` script after the jquery library. Example:

~~~
<script src='jquery.min.js'></script>
<script src='jquery.tabs.js'></script>
~~~


## Example

~~~
<div id='tabs'>
  <ul> <!-- auto-adds class tabs-nav for styling -->
    <li>Tab 1</li> <!-- auto-adds class selected for styling (if tab li selected) -->
    <li>Tab 2</li>
    <li>Tab 3</li>
  </ul>

  <div> <!-- auto-adds class tabs-panel for styling -->
    bla bla bla bla bla
  </div>

  <div>
    bla bla bla bla bla
  </div>

  <div>
    bla bla bla bla bla
  </div>
</div>
~~~

JavaScript:

~~~
tabify( '#tabs' );
~~~

## License

The scripts are dedicated to the public domain. Use it as you please with no restrictions whatsoever.
