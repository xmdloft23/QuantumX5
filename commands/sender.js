async function sender(message, client, texts) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        text: `> _*${texts}*_`,

    });
}


export default sender;
