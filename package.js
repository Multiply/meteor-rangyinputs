Package.describe({
	summary: 'jquery selection range input manipulation library'
});

Package.on_use(function (api) {
	api.use([
		'jquery',
	], 'client');

	api.add_files([
		'lib/rangyinputs/rangyinputs-jquery-src.js'
	], 'client');
});
