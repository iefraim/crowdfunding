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
ask efraim, if we can allow duplicate team names.
the timer does not work in all time zones, it stops from the time in that zone isntead of matching time in denver. 
on admin/index page, why does clicking on team to edit does not work.  
//in data, someone put a single quote and it crashed the data, see if you can just jsonencode the response.
 
 



