var inBrowser = typeof window !== 'undefined';

var marked = require('./marked');
var Chart = inBrowser ? require('chart.js') : {};

var ENV = 'marked-chardjs-binding: ';
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 400;

var forEach = [].forEach;

function fail(message) {
  throw new Error(ENV + message);
}

function render(chartDOM) {
  if (chartDOM.getAttribute('data-init') === 'true') {
    return;
  }

  var name = chartDOM.getAttribute('data-chartname');
  var chartData;
  try {
    chartData = JSON.parse(chartDOM.innerHTML);
  } catch (e) {
    fail('failed to parse data as JSON');
    return;
  }

  var width = chartData.width || DEFAULT_WIDTH;
  var height = chartData.height || DEFAULT_HEIGHT;
  var data = chartData.data || null;
  var options = chartData.options || null;

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  chartDOM.innerHTML = '';
  chartDOM.setAttribute('data-init', 'true');
  chartDOM.style.display = 'block';
  chartDOM.appendChild(canvas);

  var thisChart = new Chart(ctx);

  if (!thisChart[name]) {
    fail('invalid chart name: "' + name + '"');
    return;
  }

  thisChart[name](data, options);
}

function renderCharts() {
  // simply return if it's not in browsers
  if (!inBrowser) {
    return;
  }

  var chartsDOM = document.querySelectorAll('[data-chartname]');

  forEach.call(chartsDOM, render);
}

var binding = {};
binding.marked = marked;
binding.renderCharts = renderCharts;

module.exports = binding;
