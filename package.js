Package.describe({
  name: 'fileer:size',
  version: '0.0.2',
  summary: 'Generate a human readable String describing the file size.',
  git: 'https://github.com/fileer/size.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Meteor-provided package
  api.use(['blaze']);

  api.addFiles('size.js');
});
