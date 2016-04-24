module.exports = {
    "extends": "google",
    "env": {
      browser: true
    },
    "globals": {},
    "rules": {
      'max-len': [1, 100, 4, {
        ignoreComments: true,
        ignoreUrls: true
      }]
    }
};
