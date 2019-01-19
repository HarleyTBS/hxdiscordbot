const TOKEN = "NTM2MjExNDEwMzg5MTcyMjI2.DyTpJg.IXBi__xmpEO6IZ0Q7--9qE7gF9s"

//Config
//-----------------------


const COLOR = 0x0028FF //dark blue

//-----------------------
//Code
const commando = require('discord.js-commando')
const discord = require('discord.js')
const bot = new commando.Client({
    commandPrefix: "§$"
});

bot.on('message', function(message){
    if(message.content.includes('!')){
        message.channel.send("my prefix is ```$```")
    }});
bot.on('message', function(message){
    if(message.content == '-help'){
        message.channel.send({embed:{
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL,
            },
            title: "all the commands",
            fields: [{
                name: "-help",
                value: "You just used it!"
            },
            {
                name: "-ranks",
                value: "Under maitenance!"
            },
            {
                name: "-channel",
                value: "The channel of the youtuber you all know!"
            },
            {
                name: "-ip",
                value: "Under maitenance"
            }],
            color: COLOR
        }})
    }});


    bot.on('message', function(message){
        if(message.content == '-ping'){
            message.channel.send({embed:{
            description: "**Pong!**",
            color: COLOR
            }})
        }})


bot.on('message', function(message){
    if(message.content == 'under maitenance'){
        message.channel.send({embed:{
            author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL,
            },
            fields: [{
                name: "All ranks:",
                value: "you'll get all the permissions from the lower ranks!"
              },
              {
                name: "Immortal",
                value: "110$"
              },
              {
                name: "Legend",
                value: "80$"
              },
              {
                name: "Bedrock",
                value: "65$"
              },
              {
                name: "Diamond",
                value: "50$"
              },
              {
                name: "Emerald",
                value: "35$"
              },
              {
                name: "Lapis",
                value: "25$"
              },
              {
                name: "Gold",
                value: "20$"
              },
              {
                name: "Iron",
                value: "10$"
              },
              {
                name: "Coal",
                value: "5$"
              }],
            color: COLOR
        }})
    }

});



bot.on('message', function(message){
    if(message.content == '-channel'){
        message.channel.send({embed:{
            author: {
            name: "Harley",
            icon_url: "https://yt3.ggpht.com/a-/AAuE7mAiZT_cuihOlSEXikeVgzxlnfdfhsFGJp96XQ=s176-mo-c-c0xffffffff-rj-k-no",
            },
            title: "The youtube channel of **Harley**",
            description: "https://youtube.com/harleytbs",
            color: COLOR
        }});
    }});



bot.on('message', function(message){
    if(message.content == '-rules'){
        message.channel.send({embed:{
            author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL,
            },
            title: "Rules",
            description: "1 - Treat People the way you want to be treated \n 2 - No heated arguments \n 2 - Obey Staff \n 3 - NO NSFW Images, Videos, Emojis, Links, IP Grabbbers, Scams, or Discord invites (outside advertise) \n 4 - Don't promote hacked clients or anything similar. \n 5 - No all cap messages, Spam goes in the spam channel. \n 6 - Do not play any screamers via the Music bot.",
            color: COLOR
        }});
    }
});









bot.on('ready', function(){
    console.log("I'm ready to embed!")
});




bot.login(TOKEN);
