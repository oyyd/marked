# marked-chardjs-binding

Hacking [marked](https://github.com/chjj/marked) to support [Chart.js](https://github.com/nnnick/Chart.js).

For example:

```md
# Render Line Chart

graph.Line
{
  {
      "labels": ["January", "February", "March", "April", "May", "June", "July"],
      "datasets": [
          {
              "label": "My First dataset",
              "fillColor": "rgba(220,220,220,0.2)",
              "strokeColor": "rgba(220,220,220,1)",
              "pointColor": "rgba(220,220,220,1)",
              "pointStrokeColor": "#fff",
              "pointHighlightFill": "#fff",
              "pointHighlightStroke": "rgba(220,220,220,1)",
              "data": [65, 59, 80, 81, 56, 55, 40]
          },
          {
              "label": "My Second dataset",
              "fillColor": "rgba(151,187,205,0.2)",
              "strokeColor": "rgba(151,187,205,1)",
              "pointColor": "rgba(151,187,205,1)",
              "pointStrokeColor": "#fff",
              "pointHighlightFill": "#fff",
              "pointHighlightStroke": "rgba(151,187,205,1)",
              "data": [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
}
endgraph
```

```js
var binding = require('marked-chardjs-binding');
var marked = binding.marked;
var renderCharts = binding.renderCharts;

var markdownString = '...';

document.getElementById('main', marked(markdownString));
renderCharts();
```

will get:

// TODO: line chart picture

### installation

// TODO:

### Usage

You have to use Webpack or Browserify to consume CommonJS module.

// TODO:
