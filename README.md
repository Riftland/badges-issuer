# Badges Issuer

## How to start

- Run `npm run init` to create `badges.json`, `credentials.json`, `emails.json` and `.env` files. Running this script the content of `template.env` will be copied into `.env` file too.
- Set proper username and password into `.env` file
- Fill an array of emails to send badges into `emails.json`

## About scripts

- `npm run badges:auth` gets proper credentials (access token, expiration time and so) to run succesfully the next scripts.
- `npm run badges:info` gets associated badges list to your account in base your credentials.
- `npm run badges:issue` issues all specified badges typed after script (i.e. `npm run badges:issue badgeName1 badgeName2 "badge name 3 with spaces"`). This script issues all badges for all emails especified into `emails.json` and will change the field `given` of each badge into `badges.json` from `false` to `true`. If some badge has that field to `true` when the script is run, the badge won't be issued.
