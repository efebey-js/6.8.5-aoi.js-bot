const { AoiClient, LoadCommands } = require("aoi.js");

const settings = require("./config.json")

const client = new AoiClient({
    token: settings.token, // Here goes the Token you copied earlier!
    prefix: settings.prefix, // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Ping Command which responds when doing "!ping"
module.exports = {
    name: "ping",
    code: `$pingms`
}

const loader = new LoadCommands(client);
client.loadCommands("./commands");

client.status({
  "name": "AoiJS Bot",
  "type": "WATCHING",
  "time": 12
});

 client.command({
    name: "eval",
    code: `
   $eval[$message]
   $onlyForIDs[$clientOwnerIDs[];Bu komutu sadece sahiplerim kullanabilir]
    `});
    client.variables({
        afk: "no",
        afkmesaj: "",
        değer3: "0"
    });
    
    