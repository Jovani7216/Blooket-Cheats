/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsimulatePack.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");var t=document.createElement("iframe");document.body.append(t),window.alert=t.contentWindow.alert.bind(window),window.prompt=t.contentWindow.prompt.bind(window),t.remove();let p=webpackJsonp.push([[],{[1234]:(e,t,a)=>{t.webpack=a}},[["1234"]]])["webpack"];t=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;let o=p("fGzD");o=Object.keys(o.a).reduce((e,t)=>(e.packs.includes(t)&&(e.data[t]=Object.fromEntries(o.b(t))),e),{packs:Array.from(document.querySelectorAll('[class*="packShadow"]')).map(e=>e.alt),data:{}}).data;var a=prompt('Which box do you want to simulate? (ex: "Ice Monster")').split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ");if(o[a]){a=function(e){var t=[],a=Object.keys(o[e]);for(const s of a)t.push(o[e][s]+(t[a.indexOf(s)-1]||0));const i=t[t.length-1]*Math.random();return a[t.findIndex(e=>e>=i)]}(a);let e=Object.values(p.c).find(e=>e.exports?.Class).exports,g={};class s extends e.Scene{constructor(e){super(),this.rarity=e.toLowerCase()}preload(){switch(this.rarity){case"uncommon":this.load.svg("uncommon-1","https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg",{width:25,height:25}),this.load.svg("uncommon-2","https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg",{width:25,height:25}),this.load.svg("uncommon-3","https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg",{width:25,height:25}),this.load.svg("uncommon-4","https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg",{width:30,height:30}),this.load.svg("uncommon-5","https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg",{width:30,height:30}),this.load.svg("uncommon-6","https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg",{width:30,height:30}),this.load.svg("uncommon-7","https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg",{width:30,height:30});break;case"rare":this.load.svg("rare-1","https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg",{width:25,height:25}),this.load.svg("rare-2","https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg",{width:25,height:25}),this.load.svg("rare-3","https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg",{width:30,height:30}),this.load.svg("rare-4","https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg",{width:30,height:30}),this.load.svg("rare-5","https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg",{width:30,height:30}),this.load.svg("rare-6","https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg",{width:30,height:30}),this.load.svg("rare-7","https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg",{width:25,height:25});break;case"epic":this.load.svg("epic-1","https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg",{width:25,height:25}),this.load.svg("epic-2","https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg",{width:25,height:25}),this.load.svg("epic-3","https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg",{width:30,height:30}),this.load.svg("epic-4","https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg",{width:30,height:30}),this.load.svg("epic-5","https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg",{width:30,height:30}),this.load.svg("epic-6","https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg",{width:30,height:30}),this.load.svg("epic-7","https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg",{width:25,height:25});break;case"legendary":this.load.svg("legendary-1","https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg",{width:25,height:25}),this.load.svg("legendary-2","https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg",{width:25,height:25}),this.load.svg("legendary-3","https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg",{width:25,height:25}),this.load.svg("legendary-4","https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg",{width:30,height:30}),this.load.svg("legendary-5","https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg",{width:30,height:30}),this.load.svg("legendary-6","https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg",{width:25,height:25}),this.load.svg("legendary-7","https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg",{width:30,height:30});break;case"chroma":this.load.svg("chroma-1","https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg",{width:25,height:25}),this.load.svg("chroma-2","https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg",{width:25,height:25}),this.load.svg("chroma-3","https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg",{width:30,height:30}),this.load.svg("chroma-4","https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg",{width:30,height:30}),this.load.svg("chroma-5","https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg",{width:30,height:30}),this.load.svg("chroma-6","https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg",{width:30,height:30}),this.load.svg("chroma-7","https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg",{width:25,height:25})}}create(){g.scene=this,g.rarity="",g.particles=this.physics.add.group({classType:new e.Class({Extends:e.GameObjects.Image,initialize:function(){e.GameObjects.Image.call(this,g.scene,0,0,"uncommon-1"),this.setDepth(3),this.lifespan=0},spawn:function(e,t,a,i,s,o,l,r,c){this.setTexture(c),this.setActive(!0),this.setVisible(!0),this.setPosition(e,t),this.setScale(a),this.targets=[],g.scene.physics.velocityFromAngle(i,s,this.body.velocity),this.body.setGravityY(o),this.body.setAngularVelocity(l),this.lifespan=r},update:function(e,t){this.lifespan-=t,0<this.lifespan||(this.setActive(!1),this.setVisible(!1))}}),runChildUpdate:!0}),this.nextParticle=0,this.numExplosions=0,this.game.events.on("start-particles",e=>{g.rarity=e,this.numExplosions="Uncommon"===e?75:"Rare"===e?100:-1})}update(e,t){const a=p("74sb");function i(e){switch(e){case"center":var t=Object(a.l)(-115,-65);return{x:g.scene.cameras.main.worldView.width/2,y:g.scene.cameras.main.worldView.height/2,scale:Object(a.l)(.7,1),angle:t,velocity:Object(a.l)(600,750),gravity:700,angVelocity:(-90<t?1:-1)*Object(a.l)(125,175),lifespan:2500};case"right-bottom":return{x:g.scene.cameras.main.worldView.width,y:g.scene.cameras.main.worldView.height,scale:Object(a.l)(.7,1),angle:Object(a.l)(-160,-110),velocity:Object(a.l)(600,750),gravity:500,angVelocity:Object(a.l)(-175,-125),lifespan:2500};case"left-bottom":return{x:0,y:g.scene.cameras.main.worldView.height,scale:Object(a.l)(.7,1),angle:Object(a.l)(-70,-20),velocity:Object(a.l)(600,750),gravity:500,angVelocity:Object(a.l)(125,175),lifespan:2500};case"top":return{x:Object(a.l)(0,g.scene.cameras.main.worldView.width),y:-50,scale:Object(a.l)(.7,1),angle:90,velocity:Object(a.l)(0,50),gravity:700,angVelocity:Object(a.l)(-150,150),lifespan:2500};case"right-shower":return{x:g.scene.cameras.main.worldView.width,y:Object(a.l)(0,g.scene.cameras.main.worldView.height),scale:Object(a.l)(.7,1),angle:Object(a.l)(-180,-130),velocity:Object(a.l)(600,750),gravity:500,angVelocity:Object(a.l)(-175,-125),lifespan:2500};case"left-shower":return{x:0,y:Object(a.l)(0,g.scene.cameras.main.worldView.height),scale:Object(a.l)(.7,1),angle:Object(a.l)(-50,0),velocity:Object(a.l)(600,750),gravity:500,angVelocity:Object(a.l)(125,175),lifespan:2500};case"right-diamond":t=Object(a.l)(0,g.scene.cameras.main.worldView.height);return{x:g.scene.cameras.main.worldView.width,y:t,scale:Object(a.l)(.7,1),angle:t>g.scene.cameras.main.worldView.height/2?-150:-210,velocity:Object(a.l)(600,750),gravity:0,angVelocity:Object(a.l)(-175,-125),lifespan:2500};case"left-diamond":t=Object(a.l)(0,g.scene.cameras.main.worldView.height);return{x:0,y:t,scale:Object(a.l)(.7,1),angle:t>g.scene.cameras.main.worldView.height/2?-30:30,velocity:Object(a.l)(600,750),gravity:0,angVelocity:Object(a.l)(125,175),lifespan:2500};default:return{}}}if(g.rarity&&0!==this.numExplosions&&(this.nextParticle-=t,this.nextParticle<=0)){switch(g.rarity){case"Uncommon":for(let e=0;e<2;e++){var s=g.particles.get();s&&s.spawn.apply(s,Object.values(i("center")).concat("uncommon-"+Object(a.m)(1,8)))}break;case"Rare":for(var o=0;o<2;o++){var l=g.particles.get();l&&l.spawn.apply(l,Object.values(i(o%2==0?"left-bottom":"right-bottom")).concat("rare-"+Object(a.m)(1,8)))}break;case"Epic":for(var r=0;r<2;r++){var c=g.particles.get();c&&c.spawn.apply(c,Object.values(i(r%2==0?"left-shower":"right-shower")).concat("epic-"+Object(a.m)(1,8)))}break;case"Legendary":for(var h=0;h<3;h++){var d=g.particles.get();d&&d.spawn.apply(d,Object.values(i("top")).concat("legendary-"+Object(a.m)(1,8)))}break;case"Chroma":for(var n=0;n<3;n++){var m=g.particles.get();m&&m.spawn.apply(m,Object.values(i(n%2==0?"left-diamond":"right-diamond")).concat("chroma-"+Object(a.m)(1,8)))}}this.nextParticle=20,0<this.numExplosions&&(this.numExplosions=Math.max(this.numExplosions-1,0))}}}var i=Object.values(p.c).find(e=>e.exports?.a?.Elephant).exports.a;t.setState({loadingPack:!1,openPack:!0,unlockedBlook:a,tokens:t.state.tokens,newUnlock:!0,game:{type:e.WEBGL,parent:"phaser-market",width:"100%",height:"100%",scale:{mode:e.Scale.NONE,autoCenter:e.Scale.CENTER_BOTH},transparent:!0,physics:{default:"arcade"},scene:new s(i[a].rarity)},canOpen:!0})}else alert("I couldn't find that box!")})();
