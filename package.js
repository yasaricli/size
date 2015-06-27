Package.describe({
  name: 'fileer:size',
  version: '0.0.1',
  summary: 'Generate a human readable String describing the file size.',
  git: 'https://github.com/fileer/size.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('size.js');
});
