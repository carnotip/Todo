
// Add uncaught-exception handler in prod-like environments
if (geddy.config.environment != 'development') {
  process.addListener('uncaughtException', function (err) {
    geddy.log.error(JSON.stringify(err));
  });
}

// array to store in memory our data
geddy.todos = [];

// We created a blank model-adapter object, and add the Todo model adapter onto it.
geddy.model.adapter = {};
geddy.model.adapter.Todo = require(process.cwd() + '/lib/model_adapters/todo').Todo;