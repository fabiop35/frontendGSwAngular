# FrontendGSwAngular

#Download Bootstrap examples
https://getbootstrap.com/docs/4.6/examples/

#Route examples
bootstrap-4.6.2\site\content\docs\4.6\examples

#Add modules
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

# >angular.json -Styles and scripts: 
 "node_modules/bootstrap/dist/css/bootstrap.min.css"

 "node_modules/popper.js/dist/umd/popper.min.js", 
 "node_modules/jquery/dist/jquery.slim.min.js", 
 "node_modules/bootstrap/dist/js/bootstrap.min.js" 
 "node_modules/auth0-js/dist/auth0.js" 

ng g c components/login
touch src/app/models/user.model.ts
ng g s services/login

#app.modules.ts add:
HttpClientModule

#add proxy.json

ng g c components/home

ng g c components/post

ng g s services/post


#ToDo
*check this.user.setId(result['data'][0]._id);


