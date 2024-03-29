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


cconst roblox = require('noblox.js')
const Discord = require('discord.js')
const client = new Discord.Client();
var token = "NjM2NDUwMTc2ODQ4MTAxNDA2.XbB9eA.uciqbYowK9YdJlAceXld2hIYKCU";

client.login(token)

var cookie = "E57CC5981B14E10E84305682E0A923D1413305B54D98BCF5EDB75BE68AAF37E95749A1140565E986CAAEECADB5C939CD9BD9908076B979BA7EB73E6CE3CC9781ECF738DA6A35F36987EF7A00FDC0E021FE93175282E9DA4B3AC68F757BDF9DBA2B1EDACD78BF111377D378EE773A4D422C6A444FAAB4392B9D6241AF6F8C2096713FC940434F6114CC1CC7A7829918368E4A5D35AB00B04D4B0C2B0E13399078724592E752B7A91C773BD24C2D0676612464391335001A4BB85ACB0A1429F428B6FEF34857D7EBAFE360F0768A7D4B29F90E167AD906CBAA4FB2A886E4EBECAD0A634B9B9FCC3DEBA34FE920EEF36951FB7384B4FC204B766B3E1A64ACAE9A460926C7F52832C26E71091E6940B427E879AC72093A4AEF0252D9F3F3FA039699FF523DD2";
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
	if (message.author.bot) return;
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

