process.env.NODE_ENV = 'test';

require('babel-register')({
  presets: ['es2015', 'es2016', 'stage-0']
});
