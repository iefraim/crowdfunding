"# crowdfunding"

First time downloading from github make sure to run `npm install`

TO BUILD :

open terminal
type in webpack
to watch: add --watch

This will build the project.
Take the bundle.js and index.html and copy them to the server

Be careful when uploading public folder.

Do not upload sql or data unless you made a change. make sure not
only upload from the data and admin folder if you made a change

test that export works on all rows even if more than showing

$('.tableexport-caption').remove();


when installing on new site: 
1. copy zipped build folder to the new site
2. open phpadmin and import the sql file 
3.  functions/mysql.php to match connection details, localhost, user, pass, db. 
4. make sure crowdfund and admin, data folder has 755 permissions
5. change names and img, look for response email


 TODO:
check which admin files i changed
ask efraim, if we can allow duplicate team names.
on team listing page is no id is shown, show most recent ones. 
probably donation lsiting also
get better text for team submission email. 
on donation page, x for delete needs to be clearer that it's a link. 
change all sql inserts to pdo prepare .


