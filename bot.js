const http = require('http');  
http.createServer((req,res) => {
    if (req.url == '/') {
        console.log('ping');
        res.write('ping');
        res.end();
    }
}).listen(process.env.PORT || 4000);

setInterval(function() {
    http.get("https://bellumfideihostingbot.herokuapp.com");
}, 300000); 


const roblox = require('noblox.js')
const Discord = require('discord.js')
const client = new Discord.Client();
var token = "NjM2NDUwMTc2ODQ4MTAxNDA2.XbB9eA.uciqbYowK9YdJlAceXld2hIYKCU";

client.login(token)

var cookie = "CB277771CFA0608AF40750EB51CB6DF3A0AD2D6545E76A28C2D2AE45CE723C1FF1B3C177B137115805D2DA9458D1C47D872D639649FFAD7170B5A79482564F708502F2434E3B87D72F95D83B650C9A80F3D3158D90AA0A618345051722B2723A40D99BBFB4A59C0A451DE479A51BC60243A6DA0EE96E2996A8CA222D382AE393691F01BCA50C21383775E16D75AD7E7C129F1846DD50989E2BE561DD5327BBE84A1C928A338BB3895089C9E7B9D7AA07088E1ECDFB6FE2D133033417A5274AC0BDAF2B17D2DE43B434C80F7110903488A8A621DD1CBBD9A2479CCB907A08D6F7C95460533BB16DF63351466B45C2E30CDA33587CDAACFCC3E6251A414BBFD74D1AC135110134EF2BBFD87917804BDFC221C34BD5AC198407423783D8B5DA622BB222BCF4";
var prefix = ';';
var maximumRank = 254;

roblox.cookieLogin(cookie).catch(() => {console.log("Sorry, it failed.");});


client.on("ready", () => {
  client.user.setGame(`Watching over Bellum Fidei`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} joined ${guild}`)
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} left ${guild}`)
});

var prefix = ';';
var groupId = 5213000;
var maximumRank = 254;

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Assassin-Promote', message)){
		if(!message.member.roles.some(r=>["Assassin Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(5213000, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not be promoted`)
					} else {
						roblox.promote(5213000, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been promoted`)
						}).catch(function(err){
							message.channel.send("> Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
	
	if(isCommand('Assassin-Demote', message)){
		if(!message.member.roles.some(r=>["Assassin Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(5213000, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not demoted.`)
					} else {
						roblox.demote(5213000, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been demoted`)
						}).catch(function(err){
							message.channel.send("> Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
	
	 if(isCommand('Assassin-Exile', message)){
		if(!message.member.roles.some(r=>["Assassin Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(5213000, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not be exiled`)
					} else {
						roblox.exile(5213000, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been exiled`)
						}).catch(function(err){
							message.channel.send("> Failed to exile.")
						});
					}
				}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
	
	    if(isCommand('Templar-Promote', message)){
		if(!message.member.roles.some(r=>["Templar Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(4492063, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not be promoted`)
					} else {
						roblox.promote(4492063, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been promoted`)
						}).catch(function(err){
							message.channel.send("> Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
	
		if(isCommand('Templar-Demote', message)){
		if(!message.member.roles.some(r=>["Assassin Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(4492063, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not demoted.`)
					} else {
						roblox.demote(4492063, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been demoted`)
						}).catch(function(err){
							message.channel.send("> Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
 if(isCommand('Templar-Exile', message)){
		if(!message.member.roles.some(r=>["Assassin Officer"].includes(r.name)) )
			return message.reply("> You can't use this command.");
    	var username = args[1]
    	if (username){
    		message.channel.send(`> Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(4492063, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`> ${username} can not be exiled`)
					} else {
						roblox.exile(4492063, id)
						.then(function(roles){
							message.channel.send(`> ${username} has successfully been exiled`)
						}).catch(function(err){
							message.channel.send("> Failed to exile.")
						});
					}
	 			}).catch(function(err){
					message.channel.send("> Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`> Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("> Please enter a username.")
    	}
    	return;
    }
});
