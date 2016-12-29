var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
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
        }))
  .use(markdown())
  .use(permalinks({
    relative: false,
    pattern: ':title'
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
      }
    }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('mariosanchez.org built!');
    }
  });