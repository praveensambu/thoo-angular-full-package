"use strict";(self.webpackChunkthoo=self.webpackChunkthoo||[]).push([[920],{9920:(U,g,l)=>{l.r(g),l.d(g,{ComingSoonModule:()=>q});var c=l(8583),h=l(6485),t=l(7716);function w(e,i){if(1&e&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.divider," ")}}function C(e,i){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p",2),t._uU(2),t.qZA(),t.YNc(3,w,2,1,"span",3),t.TgZ(4,"p",4),t._uU(5),t.qZA(),t.qZA()),2&e){const n=i.$implicit,s=i.index,a=t.oxw();t.Gre("measurements ",n,""),t.xp6(2),t.hij(" ",a.showZero&&a.displayNumbers[s]<10?"0"+a.displayNumbers[s].trim():a.displayNumbers[s]," "),t.xp6(1),t.Q6J("ngIf",a.display[s+1]),t.xp6(2),t.hij(" ",n," ")}}const T=["*"];let A=(()=>{class e{constructor(){this.displayString="",this.showZero=!1,this.reached=new t.vpe,this.display=[],this.displayNumbers=[],this.wasReached=!1,setInterval(()=>this._displayString(),100)}_displayString(){if(this.wasReached)return;"string"==typeof this.units&&(this.units=this.units.split("|"));let n=new Date(this.end),s=new Date,a=n-s;(a<100&&a>0||a<0&&!this.wasReached)&&(this.wasReached=!0,this.reached.next(s));let d,o,S=this.units[this.units.length-1],u={year:290304e5,month:24192e5,weeks:6048e5,days:864e5,hours:36e5,minutes:6e4,seconds:1e3},r={},p="",Z="",f=a;for(d in this.units)if(this.units.hasOwnProperty(d)){if(o=this.units[d].trim(),!1===u[o.toLowerCase()])throw new Error("Cannot repeat unit: "+o);if(!1===u.hasOwnProperty(o.toLowerCase()))throw new Error("Unit: "+o+" is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds");r[o]=this.wasReached?0:f/u[o.toLowerCase()],r[o]=S===o?Math.ceil(r[o]):Math.floor(r[o]),f-=r[o]*u[o.toLowerCase()],u[o.toLowerCase()]=!1,r[o]=r[o]>0?r[o]:0,Z+=" "+r[o]+" | ",p+=" "+o}(null===this.text||!this.text)&&(this.text={Year:"Year",Month:"Month",Weeks:"Weeks",Days:"Days",Hours:"Hours",Minutes:"Minutes",Seconds:"Seconds",MilliSeconds:"Milliseconds"}),this.displayString=p.replace("Year",this.text.Year+" | ").replace("Month",this.text.Month+" | ").replace("Weeks",this.text.Weeks+" | ").replace("Days",this.text.Days+" | ").replace("Hours",this.text.Hours+" | ").replace("Minutes",this.text.Minutes+" | ").replace("Seconds",this.text.Seconds),this.displayNumbers=Z.split("|"),this.display=this.displayString.split("|")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["countdown"]],inputs:{displayString:"displayString",showZero:"showZero",units:"units",text:"text",end:"end",divider:"divider"},outputs:{reached:"reached"},ngContentSelectors:T,decls:3,vars:1,consts:[[1,"countdown"],[3,"class",4,"ngFor","ngForOf"],[1,"measurements-number"],["class","divider",4,"ngIf"],[1,"measurements-text"],[1,"divider"]],template:function(n,s){1&n&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,C,6,6,"div",1),t.qZA(),t.Hsn(2)),2&n&&(t.xp6(1),t.Q6J("ngForOf",s.display))},directives:[c.sg,c.O5],styles:['.countdown[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;align-content:center;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.countdown[_ngcontent-%COMP%]   .measurements[_ngcontent-%COMP%]{flex:.1}.countdown[_ngcontent-%COMP%]   .measurements[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{float:right}']}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez]]}),e})();var m=l(7957);const v=[{path:"",component:(()=>{class e{constructor(){this.text={Days:"Days",Hours:"Hours",Minutes:"Minutes",Seconds:"Seconds"}}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coming-soon"]],decls:55,vars:1,consts:[[1,"coming-soon","parallax"],[1,"container"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"full-height","coming-soon-img"],["src","assets/images/soon.jpg","alt","img",1,"image-fit"],[1,"col-lg-8"],[1,"full-height","coming-soon-text"],[1,"text-custom-black"],[1,"counter"],["units","Days | Hours | Minutes | Seconds","end","August 1, 2022",1,"d-block","w-100",3,"text"],[1,"coming-soon-contact"],[1,"custom-flex"],[1,"text-light-dark","fw-600","d-block"],["href","tel:",1,"text-custom-black","fw-600"],["href","#",1,"text-custom-black","fw-600"],["href","mailto:",1,"text-custom-black","fw-600"],[1,"newsletter-form"],[1,"form-group"],[1,"input-group","group-form"],["type","text","name","#","placeholder","Email Id",1,"form-control","form-control-custom"],["type","submit",1,"input-group-append"],[1,"social-media"],["href","#",1,"text-light-dark"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-instagram"],[1,"fab","fa-youtube"],[1,"fab","fa-google-plus"],[1,"fab","fa-vimeo"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"h1",8),t._uU(9,"Coming Soon"),t.qZA(),t.TgZ(10,"div",9),t._UZ(11,"countdown",10),t.qZA(),t.TgZ(12,"div",11),t.TgZ(13,"ul",12),t.TgZ(14,"li"),t.TgZ(15,"label",13),t._uU(16,"Phone:"),t.qZA(),t.TgZ(17,"a",14),t._uU(18,"(+123) 123 4567 890"),t.qZA(),t.qZA(),t.TgZ(19,"li"),t.TgZ(20,"label",13),t._uU(21,"Address:"),t.qZA(),t.TgZ(22,"a",15),t._uU(23,"AENEAN VULPUTATE PORTTITOR"),t.qZA(),t.qZA(),t.TgZ(24,"li"),t.TgZ(25,"label",13),t._uU(26,"Email Us:"),t.qZA(),t.TgZ(27,"a",16),t._uU(28,"example@example.com"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",17),t.TgZ(30,"div",18),t.TgZ(31,"div",19),t._UZ(32,"input",20),t.TgZ(33,"button",21),t._uU(34," Send "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",22),t.TgZ(36,"ul",12),t.TgZ(37,"li"),t.TgZ(38,"a",23),t._UZ(39,"i",24),t.qZA(),t.qZA(),t.TgZ(40,"li"),t.TgZ(41,"a",23),t._UZ(42,"i",25),t.qZA(),t.qZA(),t.TgZ(43,"li"),t.TgZ(44,"a",23),t._UZ(45,"i",26),t.qZA(),t.qZA(),t.TgZ(46,"li"),t.TgZ(47,"a",23),t._UZ(48,"i",27),t.qZA(),t.qZA(),t.TgZ(49,"li"),t.TgZ(50,"a",23),t._UZ(51,"i",28),t.qZA(),t.qZA(),t.TgZ(52,"li"),t.TgZ(53,"a",23),t._UZ(54,"i",29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(11),t.Q6J("text",s.text))},directives:[A],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(v)],m.Bz]}),e})();var M=l(4065);let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,x,M.m,h.IJ,y]]}),e})()}}]);