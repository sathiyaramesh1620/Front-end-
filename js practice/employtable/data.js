let employees=[{"id":1,"first_name":"Constanta","email":"caslott0@telegraph.co.uk"},
{"id":2,"first_name":"Zaria","email":"zcardo1@gravatar.com"},
{"id":3,"first_name":"Daisey","email":"dhealy2@github.com"},
{"id":4,"first_name":"Vinni","email":"vivancevic3@abc.net.au"},
{"id":5,"first_name":"Gonzalo","email":"gcocking4@globo.com"},
{"id":6,"first_name":"Osborne","email":"oindruch5@bing.com"},
{"id":7,"first_name":"Cameron","email":"cknoles6@flickr.com"},
{"id":8,"first_name":"Roosevelt","email":"rcaswill7@japanpost.jp"},
{"id":9,"first_name":"Sidnee","email":"scocklie8@purevolume.com"},
{"id":10,"first_name":"Lauritz","email":"leneas9@sphinn.com"},
{"id":11,"first_name":"Clint","email":"cpetrusa@home.pl"},
{"id":12,"first_name":"Dedra","email":"daltamiranob@t-online.de"},
{"id":13,"first_name":"Lanny","email":"lanticc@wsj.com"},
{"id":14,"first_name":"Hailee","email":"hfreeborned@netscape.com"},
{"id":15,"first_name":"Jacky","email":"jloughe@sohu.com"},
{"id":16,"first_name":"Bonnee","email":"bmarmonf@usda.gov"},
{"id":17,"first_name":"Rikki","email":"rbalserg@techcrunch.com"},
{"id":18,"first_name":"Sheeree","email":"shartush@timesonline.co.uk"},
{"id":19,"first_name":"Gherardo","email":"gfippei@mysql.com"},
{"id":20,"first_name":"Kingsley","email":"kpinkiej@thetimes.co.uk"},
{"id":21,"first_name":"Rowland","email":"rleitchek@ask.com"},
{"id":22,"first_name":"Adams","email":"afeyel@cmu.edu"},
{"id":23,"first_name":"Nanny","email":"ndavidowskym@amazon.co.jp"},
{"id":24,"first_name":"Gale","email":"growbreyn@51.la"},
{"id":25,"first_name":"Vlad","email":"vschotto@fastcompany.com"},
{"id":26,"first_name":"Gale","email":"gmcgarveyp@intel.com"},
{"id":27,"first_name":"Alan","email":"asivierq@businessinsider.com"},
{"id":28,"first_name":"Xever","email":"xocarranr@sphinn.com"},
{"id":29,"first_name":"Yolanda","email":"yirons@sbwire.com"},
{"id":30,"first_name":"Ebba","email":"egilliardt@yolasite.com"},
{"id":31,"first_name":"Lorrayne","email":"lwillcocku@cdbaby.com"},
{"id":32,"first_name":"Isabelle","email":"ioloughlinv@thetimes.co.uk"},
{"id":33,"first_name":"Kellen","email":"kcoow@cargocollective.com"},
{"id":34,"first_name":"Dud","email":"ddupreyx@google.de"},
{"id":35,"first_name":"Janaye","email":"jwaghorny@opera.com"},
{"id":36,"first_name":"Sawyer","email":"sgilardonez@globo.com"},
{"id":37,"first_name":"Gregory","email":"gmallaby10@list-manage.com"},
{"id":38,"first_name":"Wit","email":"wretchford11@mapquest.com"},
{"id":39,"first_name":"Russell","email":"roneil12@sun.com"},
{"id":40,"first_name":"Merola","email":"mrushforth13@utexas.edu"},
{"id":41,"first_name":"Saunders","email":"sdoole14@ucsd.edu"},
{"id":42,"first_name":"Skipp","email":"sstrong15@delicious.com"},
{"id":43,"first_name":"Hamel","email":"hclutheram16@usatoday.com"},
{"id":44,"first_name":"Jamey","email":"jgiottini17@jugem.jp"},
{"id":45,"first_name":"Lianne","email":"larchambault18@mapquest.com"},
{"id":46,"first_name":"Gussi","email":"gbowick19@yellowbook.com"},
{"id":47,"first_name":"Tedra","email":"tyaknov1a@wix.com"},
{"id":48,"first_name":"Barbra","email":"bbrine1b@vkontakte.ru"},
{"id":49,"first_name":"Rickey","email":"rjosephsen1c@theguardian.com"},
{"id":50,"first_name":"Darill","email":"dlippatt1d@google.it"}]

function displayData(){
    let row=""
    for( emp of employees){
        row=row+`<tr>
        <td>${emp.id}</td>
        <td>${emp.first_name}</td>
        <td>${emp.email}</td>
        
        
        
        </tr>`
        
    }
    document.getElementById("sathiya").innerHTML=row;
   

   
}
