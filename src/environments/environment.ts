// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDLiDVUEpeP0r_kyiiySEQZSgxQUBONmFI',
    authDomain: 'xptraining-bfa66.firebaseapp.com',
    databaseURL: 'https://xptraining-bfa66.firebaseio.com/',
    projectId: 'xptraining-bfa66',
    storageBucket: 'gs://xptraining-bfa66.appspot.com',
    messagingSenderId: '98441244704'
  }
};