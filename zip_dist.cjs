const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/site-pronto-godaddy.zip');

// archiver module exports a factory function or a class depending on version, let's use the standard modern approach
const archive = archiver.create('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Zip file created successfully.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.directory('dist/', false);
archive.finalize();
