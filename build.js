var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var tags = require('metalsmith-tags');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

handlebars.registerHelper('moment', require('helper-moment'));

handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});



metalsmith(__dirname)
  .metadata({
    site: {
      name: 'mariosanchez.org',
      description: 'Personal website of Mario Sanchez Carrion'
    }
  })
  .source('./src')
  .destination('./public')
  .clean(false)
  .use(collections({
    articles: {
      pattern: 'articles/**/*.md',
      sortBy: 'date',
      reverse: true
      },
	  code: {
      pattern: 'code/**/*.md',
      sortBy: 'date',
      reverse: true
      },
    timeline: {
      pattern: 'timeline/**/*.md',
      sortBy: 'date',
      reverse: true
      },
    reading: {
      pattern: 'reading/**/*.md',
      sortBy: 'date',
      reverse: true
      },
    }))

  .use(markdown())

  .use(permalinks({
    relative: false,
    pattern: ':slug'
  }))

  .use(tags({
    handle: 'tags',
    path: 'tags/:tag/index.html',
    layout: 'tag.html',
    sortBy: 'date',
    reverse: true,
    slug: {mode: 'rfc3986'}
  }))

  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'article.html',
    pattern: ["*/*/*html","*/*html","*html"],
    partials: {
          header: 'partials/header',
	        footer: 'partials/footer'
          }
  }))

  .use(serve({
    port: 8082,
    verbose: true
  }))

  .use(watch({
      paths: {
        "${source}/**/*": true,
        "layout/**/*": "**/*",
      },
      livereload: true,
  }))

  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('mariosanchez.org built!');
    }
  });
