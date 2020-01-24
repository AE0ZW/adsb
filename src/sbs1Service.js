import sbs1 from 'sbs1';

function getClient(host, port){
    return sbs1.createClient({host,port});
}

function register(client, f){
    client.on('message', f)
}